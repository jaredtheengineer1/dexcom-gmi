import { fetchSummary, startDexcomAuth } from '@core/api';
import { Ionicons } from '@expo/vector-icons';
import * as textStyles from '@styles/components/text';
import * as viewStyles from '@styles/components/view';
import { primitiveTokens } from '@styles/tokens';
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';
import { Button, Modal, Pressable, Text, View } from 'react-native';
import { GMI_INTERCEPT, GMI_SLOPE } from '../constants';
import { getToken, saveToken } from '../core/storage';

const ConnectButton = ({connecting, connected, handleConnection}: {connecting: boolean, connected: boolean, handleConnection: () => void}) => {
  return <Button
    title={connecting ? 'Connecting...' : connected ? 'Dexcom Connected' : 'Connect Dexcom'}
    onPress={handleConnection}
    disabled={connected || connecting}
    />
}

export default function HomeScreen() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false)
  const [summary, setSummary] = useState<{estimatedA1c: number | null, coveragePercent: number, days:number} | null>(null);
  const [loadingSummary,setLoadingSummary]=useState(false)
  const [debug, setDebug] = useState<any>(null)
  const loadSummary = async () => {
    try {
      setLoadingSummary(true)

      const end = new Date()
      const start = new Date()
      start.setDate(end.getDate() - 90) // A1C is based on a 90 day window

      const data = await fetchSummary(start, end)
      console.log('summary data: ', data)
      log(`fetchSummary data: ${data} end fetchSummary`);
      //@ts-ignore
      setSummary(data)
    } catch(err) {
      console.error('Failed to load Summary Data', err)
      log(`catch load summary: ${err}. end catch loadSummary`)
    } finally {
      setLoadingSummary(false)
    }
  }

  useEffect(() => {
    getToken().then(token => { if(token){setConnected(true); loadSummary();}})
  },[])
  const gmi = summary?.estimatedA1c
  const days = summary?.days
  const coverage = summary?.coveragePercent

  const log = (msg: string) => {
    setDebug(d => [...d, msg])
  }

  useEffect(() => {
   Linking.getInitialURL().then(url => {
    if (url) {
      handleIncomingUrl(url)
    }
   })

   const sub = Linking.addEventListener('url', ({url}) => {
    handleIncomingUrl(url)
   })

   return () => sub.remove()
  },[])

  const handleConnectDexcom = async () => {
    try {
      setConnecting(true)
      await Linking.openURL(startDexcomAuth())
    } catch (err) {
      console.error('Dexcom connection failed', err) //maybe hook up sentry and send this
      log(`failed handledConnectDexcom: ${err}. end handleConnectDexcom`)
    } finally {
      setConnecting(false)
    }
  }

  const handleIncomingUrl = async (url: string) => {
    const parsed = Linking.parse(url);
    log(`handleIncomingUrl: ${parsed} end handleIncomingUrl`)
    if (parsed.path === 'auth-complete' && parsed.queryParams?.session) {
      await saveToken(parsed.queryParams.session as string)
      setConnected(true)
      loadSummary()
    }
  } 
  return (
    <View style={viewStyles.viewContainer}>
      {summary && (
        <>
        <Text style={[textStyles.estimateText, {fontWeight: 600}]}>Estimated A1C (GMI)</Text>
        <Text style={textStyles.estimateValue}>{gmi}%</Text>
        <Text style={textStyles.metaText}>Based on {coverage}% CGM coverage over {days} days</Text>
        </>
      )}
      <Text style={textStyles.disclaimer}>Not diagnostic - may differ from lab A1C</Text>
      <Text style={textStyles.disclaimer}>For education purposes only. Do not make medical decisions based on this information.</Text>

      {/* modal icon */}
      <Pressable onPress={() => setShowModal(true)} style={{position: 'absolute', top: 24, right: 24}}>
        <Ionicons name="information-outline" size={20} color={primitiveTokens.colors.blue500} />
      </Pressable>

      <Modal
        transparent={true}
        visible={showModal}
        animationType='fade'
        onRequestClose={() => setShowModal(false)}
      >
        <Pressable style={{height: '100%'}} onPress={() => setShowModal(false)}>
          <View style={[viewStyles.modalBackdrop, {justifyContent: 'center', alignItems: 'center', height: '100%'}]}>
            <View style={[viewStyles.modalContent, {width: '80%'}]}>
              <Text style={textStyles.modalTitle}>GMI Formula</Text>
              <Text style={textStyles.modalText}>
                Estimated A1C (GMI) is calculated as{"\n"}
                <Text style={{fontWeight: 600}}>
                  GMI = {GMI_INTERCEPT} + {GMI_SLOPE} &times; Average Glucose
                </Text>{"\n"}
                where Average Glucose is in mg/dL. This formula is based on the ADAG/Dexcom study and is intended for educational purposes only.
              </Text>
              <Pressable onPress={() => setShowModal(false)}>
                <Text style={textStyles.modalButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>

      <ConnectButton connecting={connecting} connected={connected} handleConnection={handleConnectDexcom} />
      { connected && (
        <Text style={textStyles.success}>Connected to Dexcom</Text>
      )}

      {debug && (
        <>
        <Text>Debug message:</Text>
        <Text>{debug}</Text>
        </>
      )}

    </View>
  );
}

