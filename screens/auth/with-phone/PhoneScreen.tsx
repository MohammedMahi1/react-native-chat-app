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








const HeaderPhone = () => {
  return (
    <>
      <T.H1>Welcome to Swiplete</T.H1>
      <View>
        <T.Span>Your world of chats starts here.</T.Span>
        <T.Span>Enter your phone number to dive in.</T.Span>
      </View>
    </>
  )
}
const BodyPhone = () => {
  const theme = useColorScheme();
  const nav = useNavigation<StackNavigationProp<AuthStackParamList>>();
  return (
    <>
      <Input 
      placeholder="Phone" 
      keyboardType='phone-pad'
      maxLength={10}
      />
      <Button onPress={() => nav.navigate("Password")}>Continue</Button>
      <Link href="AuthEmail" style={styleMerge({color: theme === "dark" ? "#A3A3A3" : "#525252"}, {textDecorationLine: "underline"})}>Continue with Email ?</Link>
    </>
  )
}
export const PhoneScreen = () => {
  return (
    <Container>
      <ScreensSwipie
        header={<HeaderPhone />}
        body={<BodyPhone />} />
    </Container>
  )
}
