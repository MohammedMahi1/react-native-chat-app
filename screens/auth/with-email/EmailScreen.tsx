import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import Container from 'components/Container'
import ScreensSwipie from 'components/content/ScreensSwipie'
import Link from 'components/navigation/Link'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { T } from 'components/ui/Typographies'
import { RootStackParamList } from 'navigation'
import { AuthStackParamList } from 'navigation/auth-route/authFlowEmail'
import React from 'react'
import { useColorScheme, View } from 'react-native'
import { styleMerge } from 'utils/styleMerge'

export const EmailScreenPart = () => {
  return (
    <View>
      <T.H1>Sign up with Email</T.H1>
    </View>
  )
}








const HeaderEmail = () => {
  return (
    <>
      <T.H1>Welcome to Swiplete</T.H1>
      <View>
        <T.Span>Your world of chats starts here.</T.Span>
        <T.Span>Enter your email to dive in.</T.Span>
      </View>
    </>
  )
}
const BodyEmail = () => {
  const theme = useColorScheme();
  const nav = useNavigation<StackNavigationProp<AuthStackParamList>>();
  return (
    <>
      <Input placeholder="Email" />
      <Button onPress={() => nav.navigate("Password")}>Continue</Button>
      <Link href="AuthPhone" style={styleMerge({color: theme === "dark" ? "#A3A3A3" : "#525252"}, {textDecorationLine: "underline"})}>Continue with Phone ?</Link>
    
    </>
  )
}
export const EmailScreen = () => {
  return (
    <Container>
      <ScreensSwipie
        header={<HeaderEmail />}
        body={<BodyEmail />} />
    </Container>
  )
}
