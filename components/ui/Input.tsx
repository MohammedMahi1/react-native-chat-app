import { StyleSheet, TextInput, TextInputProps, useColorScheme } from 'react-native'
import { styleMerge } from 'utils/styleMerge'
type InputProps = {} & TextInputProps
const Input = ({...rest}:InputProps) => {
    const theme = useColorScheme()
  return (
    <TextInput 
    {...rest} 
    style={
        styleMerge(
            styles.input,
            rest.style,
            {
                color:theme === 'dark' ? '#ffffff' : '#0A0A0A',
                borderColor:theme === 'dark' ? '#525252' : '#A3A3A3',
            })}
            placeholderTextColor={theme === 'dark' ? '#525252' : '#A3A3A3'}
            />
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 16,
    padding: 16,
    borderRadius: 12,
  },
})
export default Input