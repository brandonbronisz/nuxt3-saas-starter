import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'

interface ApiResponse<T> {
  data: T
  sources?: any
  message?: string
}

export function useAxios<T = Record<string, any>>() {
  const loading = ref(false)
  const runtimeConfig = useRuntimeConfig()

  const instance = axios.create({
    baseURL: runtimeConfig.public.baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.request.use((request) => {
    const { token } = useAuthStorage()

    if (token.value)
      request.headers.Authorization = `Bearer ${token.value}`

    return request
  })

  const get = async (url: string, params?: Record<string, any>): Promise<T> => {
    return request<T>(
      async () => instance.get(url, { params }),
      loading,
    )
  }

  const post = async (url: string, data?: any): Promise<T> => {
    return request<T>(
      async () => instance.post(url, data),
      loading,
    )
  }

  const put = async (url: string, data?: any): Promise<T> => {
    return request<T>(
      async () => instance.put(url, data),
      loading,
    )
  }

  const del = async (url: string, params?: Record<string, any>): Promise<T> => {
    return request<T>(
      async () => instance.delete(url, { params }),
      loading,
    )
  }

  return { loading, get, post, put, del }
}

function isAxiosError(error: any): error is AxiosError {
  return 'isAxiosError' in error && error.isAxiosError === true
}

async function request<T>(
  method: () => Promise<AxiosResponse<ApiResponse<T>>>,
  loading: Ref<boolean>,
): Promise<T> {
  try {
    loading.value = true
    const response: AxiosResponse<ApiResponse<T>> = await method()
    loading.value = false
    return handleResponse(response)
  }
  catch (error) {
    loading.value = false
    if (isAxiosError(error))
      handleErrorResponse(error)

    throw error
  }
}

function handleResponse<T>(response: AxiosResponse<ApiResponse<T>>): T {
  return response.data.data
}

function handleErrorResponse<T>(error: AxiosError<ApiResponse<T>>): void {
  // handle error response
}
