import { clearToken, getToken, saveToken } from './storage';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL

type ApiErrorCode =
  | 'SESSION_NOT_FOUND'
  | 'SESSION_EXPIRED'
  | 'TOKEN_REFRESH_FAILED'
  | 'RATE_LIMITED'
  | 'INVALID_DATE_RANGE'
  | 'DEXCOM_ERROR';

  class ApiError extends Error {
    code: ApiErrorCode;
    status: number;

    constructor(code: ApiErrorCode, status:number, message?: string) {
      super(message ?? code)
      this.code = code
      this.status = status
    }
  }

  const apiFetch = async <T>(path:string, options: RequestInit = {}): Promise<T> => {
    const token = await getToken()

    const res = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token.sessionId}`} : {}),
        'Content-Type': 'application/json'
      }
    })

    const newSession = res.headers.get('X-session-Rotate')
    if (newSession) {
      await saveToken(newSession)
    }

    if (!res.ok) {
      let body: any = null

      try {
        body = await res.json()
      } catch {}

      const code = body?.error as ApiErrorCode | undefined
      if (res.status === 401 && code === 'SESSION_NOT_FOUND') {
        await clearToken()
      }

      throw new ApiError(code ?? 'DEXCOM_ERROR', res.status)
    }

    return res.json()
  }

  const fetchSummary = (start:Date, end:Date) => {
    const params = new URLSearchParams({
      start: start.toISOString(),
      end: end.toISOString()
    })
    return apiFetch(`/api/summary?${params.toString()}`,{
      method: 'GET'
    })
  }

  const fetchEgvs = (start: Date, end: Date) => {
    const params = new URLSearchParams({
      start: start.toISOString(),
      end: end.toISOString()
    })
    return apiFetch(`/api/egvs?${params.toString()}`, {
      method: 'GET'
    })
  }

  const startDexcomAuth = () => {
    return `${process.env.EXPO_PUBLIC_API_URL}/api/auth/start`
  }

  export { ApiError, fetchEgvs, fetchSummary, startDexcomAuth };

