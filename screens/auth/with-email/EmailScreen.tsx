import Container from 'components/Container'
import ScreensSwipie from 'components/content/ScreensSwipie'
import { T } from 'components/ui/Typographies'
import React from 'react'
import { View } from 'react-native'

export const EmailScreenPart = () => {
  return (
    <View>
      <T.H1>Sign up with Email</T.H1>
    </View>
  )
}










export const EmailScreen = () => {
  return (
    <Container>
      <ScreensSwipie
        header={<T.H1>Sign up with Email</T.H1>}
        footer={<T.H1>Sign up with Email</T.H1>}
        body={<T.H1>Sign up with Email</T.H1>} />
    </Container>
  )
}
