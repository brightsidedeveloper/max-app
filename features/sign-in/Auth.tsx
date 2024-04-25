import SignIn from './components/SignIn'
import { useState } from 'react'
import { StyleSheet, TextInput, SafeAreaView } from 'react-native'
import SignUp from './components/SignUp'
import { useMutation } from '@tanstack/react-query'
import supabase from '@/lib/supabase'
import { getSignInMutation, getSignUpMutation } from '@/api/sessionApi'

export default function Auth() {
  const [showLogin, setShowLogin] = useState(false)
  const { mutate: signIn } = useMutation(getSignInMutation())
  const { mutate: signUp } = useMutation(getSignUpMutation())

  const toggleLogin = () => setShowLogin(!showLogin)

  return <SafeAreaView style={styles.container}>{showLogin ? <SignIn toggleLogin={toggleLogin} /> : <SignUp toggleLogin={toggleLogin} />}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
