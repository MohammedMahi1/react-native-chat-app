import { ReactNode, useEffect } from "react";
import { Text, TextProps, useColorScheme } from "react-native"
import { twMerge } from "tailwind-merge";



type TypographieProps = {
    children:ReactNode;
} & TextProps

const colorSchemeHandler = ()=>{
    const color = useColorScheme()
    if(color === "dark"){
        return "text-white"
    }else{
        return "text-black"
    }
}
const H1 = ({children,...rest}:TypographieProps) =>{
    return(
        <Text {...rest} className={twMerge(colorSchemeHandler(),"text-2xl")}>
            {children}
        </Text> 
    )
}
const Span = ({children,...rest}:TypographieProps) =>{
    return(
        <Text {...rest} className={colorSchemeHandler()}>
            {children}
        </Text> 
    )
}

export {Span,H1}