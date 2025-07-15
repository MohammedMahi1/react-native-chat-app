import { Text, TextProps } from "react-native";
type TypographiesProps = {
    children: React.ReactNode;
} & TextProps

export const T = ({children,...rest}: TypographiesProps)=>{
    return(
        <Text {...rest}>{children}</Text>
    )
}

const H1 = ({children,...rest}: TypographiesProps)=>{
    return(
        <Text {...rest} style={{fontSize: 36, fontWeight: 'bold'}}>{children}</Text>
    )
}

const H2 = ({children,...rest}: TypographiesProps)=>{
    return(
        <Text {...rest} style={{fontSize: 20, fontWeight: 'bold'}}>{children}</Text>
    )
}
const Span = ({children,...rest}: TypographiesProps)=>{
    return(
        <Text style={{fontSize: 16, fontWeight: 'normal'}} {...rest} >{children}</Text>
    )
}
T.H1 = H1;
T.H2 = H2;
T.Span = Span;