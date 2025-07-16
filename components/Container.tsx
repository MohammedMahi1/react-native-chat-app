
import { ReactNode } from 'react'
import { ScrollView, ScrollViewProps, StyleSheet, useColorScheme, View } from 'react-native'
import { styleMerge } from 'utils/styleMerge';


type ContainerProps = ScrollViewProps&{
    children:ReactNode;
    scrollEnabled?:boolean;
} 
const Container = ({children,style,scrollEnabled=false,...rest}:ContainerProps) => {
    const scheme = useColorScheme();
  return (
    <ScrollView keyboardShouldPersistTaps='handled'  contentContainerStyle={{flex:1}} scrollEnabled={scrollEnabled} {...rest} >
      <View style={styleMerge(StyleContainer.container,style)} >
        {children}
      </View>
    </ScrollView>
  )
}



const StyleContainer = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        flex:1
    }
})
export default Container