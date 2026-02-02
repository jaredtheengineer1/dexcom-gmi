import { useEffect } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { saveToken } from './core/storage'
import { View, Text } from 'react-native'

const AuthComplete = () => {
  const router = useRouter()
  const { session } = useLocalSearchParams<{session?:string}>()

  useEffect(() => {
    if (session) {
      saveToken(session).then(() => { router.replace('/(main)')})
    }
  },[session])

  return <View><Text>Completing auth</Text></View>
} 

export default AuthComplete