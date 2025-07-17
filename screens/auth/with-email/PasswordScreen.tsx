import Container from 'components/Container'
import ScreensSwipie from 'components/content/ScreensSwipie'
import Button from 'components/ui/Button'
import { T } from 'components/ui/Typographies'
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
  return (
      <Button>Continue</Button>
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
