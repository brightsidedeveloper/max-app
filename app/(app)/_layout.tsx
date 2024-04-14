import supabase from '@/lib/supabase'
import { Tabs } from 'expo-router'
import { Button } from 'react-native'

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ title: 'Home', headerRight: () => <Button title='Sign Out' onPress={() => supabase.auth.signOut()} /> }} />
    </Tabs>
  )
}
