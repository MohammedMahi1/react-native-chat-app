import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Pressable, PressableProps, useColorScheme } from 'react-native'

type IconTipProps = {
    size?: number
} & PressableProps
const IconTip = ({size = 24,...rest}:IconTipProps) => {
    const theme = useColorScheme()
  return (
    <Pressable style={{
        backgroundColor: theme === "dark" ? "#262626" : "#E5E5E5",
        width: size,
        height: size,
        borderRadius: size * 2,
    }} {...rest}>
        <AntDesign name="close" size={24} color={theme === "dark" ?"#525252":"$A3A3A3"}/>
    </Pressable>
  )
}

export default IconTip