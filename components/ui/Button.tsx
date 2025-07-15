import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text, useColorScheme } from 'react-native'


type ButtonProps = {
    children: React.ReactNode
} & PressableProps;

const Button = ({ children, ...rest }: ButtonProps) => {
    const theme = useColorScheme()
    const styles = StyleSheet.create({
        button: {
            backgroundColor: theme === 'dark' ?  '#ffffff' : '#000000',
            paddingVertical: 12,
            borderRadius: 12,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            color: theme === 'dark' ?  '#000000' : '#ffffff',
            fontSize: 24,
            fontWeight: "semibold",
        }
    })
    return (
        <Pressable {...rest} style={[styles.button]}>
            {
                typeof children === 'string' ? <Text style={styles.text}>{children}</Text> : children
            }
        </Pressable>
    )
}

export default Button