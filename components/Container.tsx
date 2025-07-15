
import { ReactNode } from 'react'
import { SafeAreaView, ScrollView, ScrollViewProps, StyleSheet, View } from 'react-native'


type ContainerProps = ScrollViewProps & {
    children:ReactNode;
    scrollEnabled?:boolean;
} 
const Container = ({children,style,scrollEnabled=false,...rest}:ContainerProps) => {
  return (
      <SafeAreaView style={{flex:1}}>
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={[StyleContainer.container,style]} scrollEnabled={scrollEnabled} {...rest} >
        {children}
    </ScrollView>
      </SafeAreaView>
  )
}



const StyleContainer = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        flex:1
    }
})
export default Container