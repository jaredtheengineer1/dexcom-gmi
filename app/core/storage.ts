import * as SecureStore from 'expo-secure-store'

const SESSION_ID = 'session_id'

const saveToken = async (token: string) => {
  await SecureStore.setItemAsync(SESSION_ID, token)
}

const getToken = async () => {
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