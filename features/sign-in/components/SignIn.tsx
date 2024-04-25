import { Text } from 'react-native'

interface SignInProps {
  toggleLogin: () => void
}

export default function SignIn({ toggleLogin }: SignInProps) {
  return <Text>SignIn</Text>
}
