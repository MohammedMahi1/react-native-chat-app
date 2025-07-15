import React, { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

type FooterProps = {
children:ReactNode;
} & ViewProps

const Footer = ({children,...rest}:FooterProps  ) => {
  return (
    <View {...rest}>
        {children}
    </View>
  )
}




export default Footer