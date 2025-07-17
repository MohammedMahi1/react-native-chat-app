import { useNavigation } from '@react-navigation/native';
import  { ReactNode } from 'react'
import { Linking, Text, TextProps } from 'react-native'

type LinkProps = {
    children:ReactNode;
    href?:string;
} & TextProps

const Link = ({children,href,...rest}:LinkProps) => {
    const nav = useNavigation();
    const onPress = () => {
      if(href?.slice(0,4) === 'http'){
        Linking.openURL(href);
      }else{
        nav.navigate(href as never);
      }
    }
  return (
    <Text onPress={onPress} style={{textDecorationLine:'underline'}} {...rest}>
        {children}
    </Text>
  )
}

export default Link