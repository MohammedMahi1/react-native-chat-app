import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import Container from 'components/Container'
import ScreensSwipie from 'components/content/ScreensSwipie'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { T } from 'components/ui/Typographies'
import { AuthStackParamList } from 'navigation/auth-route/authFlowEmail'
import { View } from 'react-native'

const HeaderPassword = () => {
  return (
    <>
      <T.H1>Password</T.H1>
        <T.Span>Secure your chat with your password.</T.Span>

    </>
  )
}
const BodyPassword = () => {
  const nav = useNavigation<StackNavigationProp<AuthStackParamList>>();
  return (
    <>
      <Input placeholder="Password" />
      <Button onPress={() => nav.navigate("VerifyCode")}>Continue</Button>
    </>
  )
}
export const PasswordScreen = () => {
  return (
    <Container>
      <ScreensSwipie
        header={<HeaderPassword />}
        body={<BodyPassword />} />
    </Container>
  )
}
