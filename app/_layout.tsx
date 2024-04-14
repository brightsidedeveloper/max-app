import { SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function RootLayout() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Text className='text-blue-500 text-3xl'>Hello Tim!</Text>
    </SafeAreaView>
  )
}
