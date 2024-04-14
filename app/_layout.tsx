import { SafeAreaView, Text } from 'react-native'
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useCallback, useEffect } from 'react'
import { Slot, SplashScreen, useRouter } from 'expo-router'
import supabase from '@/lib/supabase'
import { getSessionApi } from '@/api/sessionApi'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export default function QueryWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout />
    </QueryClientProvider>
  )
}

function RootLayout() {
  const queryClient = useQueryClient()
  const { data: session } = useQuery(getSessionApi())
  const router = useRouter()

  useEffect(() => {
    if (session) router.replace('/')
    else if (session === null) router.replace('/sign-in')
    if (session !== undefined) setTimeout(() => SplashScreen.hideAsync(), 500)
  }, [session])

  useEffect(() => {
    supabase.auth.onAuthStateChange(() => {
      queryClient.invalidateQueries({ queryKey: getSessionApi().queryKey })
    })
  }, [])

  return <Slot />
}
