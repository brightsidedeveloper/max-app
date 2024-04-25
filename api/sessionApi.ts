import supabase from '@/lib/supabase'
import { queryOptions } from '@tanstack/react-query'

export const getSessionQuery = () =>
  queryOptions({
    queryKey: ['session'],
    async queryFn() {
      return supabase.auth.getSession().then(({ data: { session } }) => session)
    },
  })

export const getSignInMutation = () => ({
  mutationKey: ['sign-in'],
  async mutationFn({ email, password }: { email: string; password: string }) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw new Error(error.message)
  },
})

export const getSignUpMutation = () => ({
  mutationKey: ['sign-up'],
  async mutationFn({ email, password }: { email: string; password: string }) {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw new Error(error.message)
    return session
  },
})
