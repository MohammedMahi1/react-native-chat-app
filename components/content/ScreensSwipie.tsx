import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, useColorScheme, View } from 'react-native'

type ScreensSwipieProps = {
    header:React.ReactNode;
    footer:React.ReactNode;
    body:React.ReactNode;
}

const ScreensSwipie = ({header,footer,body}:ScreensSwipieProps) => {
    const navigation = useNavigation();
    const theme = useColorScheme();
  return (
    <View style={{flex:1,justifyContent:"space-between",alignItems:"flex-start"}}>
            <Pressable onPress={()=>navigation.goBack()} >
                <FontAwesome6 name="arrow-left-long" size={32} color={theme === 'dark' ? '#ffffff' : '#0A0A0A'} />
            </Pressable>
        <View>
            {header}
        </View>
        <View>
            {body}
        </View>
        <View>
            {footer}
        </View>
    </View>
  )
}

export default ScreensSwipie