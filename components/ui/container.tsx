import React, { ReactNode } from 'react'
import { View } from 'react-native'

const variants = cva

type ContainerProps = {
    children:ReactNode;
}
const Container = ({children}:ContainerProps) => {
  return (
    <View className='px-10 pt-16'>
        {children}
    </View>
  )
}

export default Container