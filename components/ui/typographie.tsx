import { ReactNode, useEffect } from "react";
import { Text, TextProps, useColorScheme } from "react-native"
import { twMerge } from "tailwind-merge";



type TypographieProps = {
    children: ReactNode;
} & TextProps

const colorSchemeHandler = () => {
    const color = useColorScheme()
    if (color === "dark") {
        return "text-white"
    } else {
        return "text-black"
    }
}
const H1 = ({ children,className, ...rest }: TypographieProps) => {
    return (
        <Text className={twMerge(colorSchemeHandler(), "text-4xl",className)} {...rest} >
            {children}
        </Text>
    )
}
const Span = ({ children,className, ...rest }: TypographieProps) => {
    return (
        <Text className={twMerge(colorSchemeHandler(),className)}{...rest} >
            {children}
        </Text>
    )
}
const Label = ({ children, className ,...rest }: TypographieProps) => {
    return (
        <Text  className={className} {...rest}>
            {children}
        </Text>
    )
}

export { Span, H1, Label }