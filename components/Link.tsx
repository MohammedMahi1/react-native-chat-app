import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react'
import { Text, TextProps } from 'react-native'

type LinkProps = {
    children:ReactNode;
    href:string;
} & TextProps

const Link = ({children,href,...rest}:LinkProps) => {
    const nav = useNavigation();
  return (
    <Text onPress={()=>nav.navigate(href)} style={{textDecorationLine:'underline'}} {...rest}>
        {children}
    </Text>
  )
}

export default Link