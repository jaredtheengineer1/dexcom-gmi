import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native';

const SESSION_ID = 'session_id'

const isSecureStoreAvailable = Platform.OS !== 'web' && SecureStore?.getItemAsync

const saveToken = async (token: string) => {
  if (!isSecureStoreAvailable) {
    return;
  }
  await SecureStore.setItemAsync(SESSION_ID, token)
}

const getToken = async () => {
  if (!isSecureStoreAvailable) {
    return null;
  }

  const sessionId = await SecureStore.getItemAsync(SESSION_ID)

  if (!sessionId) {
    return null
  }

  return { sessionId }
}

const clearToken = async () => {
  await SecureStore.deleteItemAsync(SESSION_ID)
}

export { saveToken, getToken, clearToken }