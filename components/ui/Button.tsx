import React from 'react'
import { Pressable, PressableProps } from 'react-native'

type ButtonProps = {
  children:React.ReactNode
} & PressableProps;

const Button = ({  children,...rest}: ButtonProps) => {
  return (
    <Pressable {...rest}>
        {children}
    </Pressable>
  )
}

export default Button