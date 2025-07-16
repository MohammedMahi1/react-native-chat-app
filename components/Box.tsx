import React from 'react'
import { useColorScheme, View, ViewProps } from 'react-native'
import { styleMerge } from 'utils/styleMerge'

type BoxProps = {
  children:React.ReactNode
}& ViewProps
const Box = ({children,style,...rest}:BoxProps) => {
  const scheme = useColorScheme();
  return (
  <View style={styleMerge( style, { backgroundColor: scheme === 'dark' ? '#000000' : '#ffffff' })} {...rest} >
    {children}
  </View>
  )
}

export default Box