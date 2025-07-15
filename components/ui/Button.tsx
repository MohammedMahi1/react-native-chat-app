import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native'
import { styleMerge } from 'utils/styleMerge';
import sva, {  VariantProps } from 'utils/sva';
const styles = StyleSheet.create({
    base: {
        paddingVertical: 12,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    countain: {
        backgroundColor: '#000000',
        color: '#ffffff',
    },
    sm: {
        fontSize: 24,
        color: '#ffffff',
    },
    text: {
        color: '#ffffff',
        fontWeight: "bold",
    }
})

const buttonVariants = sva({
    base: styles.base,
    variants: {
        variant: {
            countain: styles.countain,
        },
    },
    defaultVariants: {
        variant: 'countain',
    },
})




type ButtonProps = {
    children: React.ReactNode
} & VariantProps<typeof buttonVariants>

const Button = ({ children,variant  }: ButtonProps) => {
    const theme = useColorScheme()

    return (
        <Pressable style={styleMerge(buttonVariants({ variant }))}>
            {
                typeof children === 'string' ? <Text style={styleMerge({ color: "red", fontSize: 24 })}>{children}</Text> : children
            }
        </Pressable>
    )
}

export default Button