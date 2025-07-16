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
        backgroundColor: "#000000",
        color: '#ffffff',
    },
    outline: {
        backgroundColor: '#ffffff',
        color: '#000000',
        borderWidth: 1,
        borderColor: '#000000',
    },
    sm: {
        fontSize: 12,
    },
    md: {
        fontSize: 24,
    },
    lg: {
        fontSize: 48,
    },
    text: {
        fontWeight: "bold",
    },
})

const buttonVariants = sva({
    base: styles.base,
    variants: {
        variant: {
            countain: styles.countain,
            outline: styles.outline,
        },
    },
    defaultVariants: {
        variant: 'countain',
    },
})

const textVariants = sva({
    base: styles.text,
    variants: {
        size: {
            sm: styles.sm,
            md: styles.md,
            lg: styles.lg,
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

type ButtonProps = {
    children: React.ReactNode
} & PressableProps & VariantProps<typeof buttonVariants> & VariantProps<typeof textVariants>

const Button = ({ children,variant,size,...rest  }: ButtonProps) => {
    const theme = useColorScheme()

    return (
        <Pressable style={styleMerge(buttonVariants({ variant }))} {...rest}>
            {
                typeof children === 'string' ? <Text style={styleMerge(textVariants({size}),{color:variant === 'outline' ? '#000000' : '#ffffff' })}>{children}</Text> : children
            }
        </Pressable>
    )
}

export default Button