import { defineStore } from 'pinia'

export interface AuthUser extends Record<string, any> {
  name: string
  token: string
  expires_at: string
}

export const useAuthStore = defineStore('auth', () => {
  const { token, user: sessionUser } = useAuthStorage()

  const user = ref<AuthUser | null>(sessionUser.value)
  const loading = ref<boolean>(false)

  const loggedIn = computed<boolean>(() => {
    return !!token.value
  })

  // actions
  const logout = () => {
    const { clear } = useAuthStorage()
    clear()

    user.value = null
  }

  const login = async (params: { email: string; password: string }) => {
    const { store } = useAuthStorage()
    const { loading: reqLoading, post } = useAxios<{ user: AuthUser; token: string }>()
    const stopWatcher = watch(reqLoading, (newLoading) => {
      loading.value = newLoading
    })

    loading.value = reqLoading.value
    user.value = null

    try {
      const data = await post('/api/login', params)

      user.value = data.user
      store(data.token, data.user)
    }
    finally {
      stopWatcher()
    }
  }

  return {
    user,
    loading,
    loggedIn,
    logout,
    login,
  }
})
