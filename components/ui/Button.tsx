import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native'
import { styleMerge } from 'utils/styleMerge';
import sva, {  VariantProps } from 'utils/sva';

//Styles
const styles = StyleSheet.create({
    base: {
        paddingVertical: 12,
        borderRadius: 16,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    contain: {
        borderWidth: 1,
        borderColor: 'transparent',
    },
    outline: {
        borderWidth: 2,
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

//Button Variants
const buttonVariants = sva({
    base: styles.base,
    variants: {
        variant: {
            contain: styles.contain,
            outline: styles.outline,
        },
    },
    defaultVariants: {
        variant: 'contain',
    },
})

//Text Variants
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

//Button Props
type ButtonProps = {
    children: React.ReactNode
} & PressableProps & VariantProps<typeof buttonVariants> & VariantProps<typeof textVariants>

const Button = ({ children,variant = 'contain',size = 'md',...rest  }: ButtonProps) => {
    const theme = useColorScheme();
    let backgroundColor = undefined;
    let textColor = undefined;
    let borderColor = undefined;

    //Dynamic Color Logic
    if (variant === 'contain') {
        if (theme === 'dark') {
            backgroundColor = '#ffffff';
            textColor = '#000000';
        } else {
            backgroundColor = '#000000';
            textColor = '#ffffff';
        }
    } else if (variant === 'outline') {
        if (theme === 'dark') {
            backgroundColor = 'transparent';
            textColor = '#ffffff';
            borderColor = '#ffffff';
        } else {
            backgroundColor = 'transparent';
            textColor = '#000000';
            borderColor = '#000000';
        }
    }

    return (
        <Pressable
            style={styleMerge(
                buttonVariants({ variant }),
                { backgroundColor, borderColor }
            )}
            {...rest}
        >
            {
                typeof children === 'string' ? (
                    <Text style={styleMerge(textVariants({size}), { color: textColor })}>{children}</Text>
                ) : children
            }
        </Pressable>
    )
}

export default Button