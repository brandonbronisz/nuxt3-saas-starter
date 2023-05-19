<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

useHead({
  title: 'Login',
})

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

const { handleSubmit } = useForm({
  validationSchema: object({
    email: string().required().email().label('Email'),
    password: string().required().label('Password'),
  }),
})

const auth = useAuthStore()
const router = useRouter()
const error = ref()

const { store } = useAuthStorage()

const onSubmit = handleSubmit(async (values) => {
  try {
    auth.login(values)
    router.push('/')
  }
  catch (e) {
    error.value = 'Invlaid login credentials'
  }
})
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <form class="rounded-lg px-10 py-8 w-full max-w-md mx-auto" @submit="onSubmit">
      <AuthHeader title="Login" subtitle="Please enter your credentials" />

      <div v-if="error" class="alert alert-error mb-4">
        {{ error }}
      </div>

      <VInput name="email" label="Email" placeholder="Email" />
      <VInput name="password" label="Password" placeholder="Password" type="password" />

      <div class="mb-5 flex gap-2 justify-between items-center">
        <label class="flex gap-2 items-center text-sm">
          <input
            type="checkbox"
            class="w-4 h-4 rounded text-primary-500 focus:ring-primary-500 transition duration-300"
          >
          Remember me
        </label>
        <nuxt-link to="/auth/forgot-password" class="text-primary-500 hover:underline font-semibold text-sm">
          Forgot Password?
        </nuxt-link>
      </div>

      <VButton type="submit" color="primary" block class="mb-5">
        Login
      </VButton>

      <div class="text-gray-600 text-sm">
        Don't have account?
        <nuxt-link to="/auth/register" class="text-primary-500 hover:underline font-semibold text-sm">
          Register
        </nuxt-link>
      </div>
    </form>
  </div>
</template>
