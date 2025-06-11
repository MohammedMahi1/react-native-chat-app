import { cn } from '@/lib/cn'
import { cva, VariantProps } from 'class-variance-authority'
import React, { ReactNode } from 'react'
import { ButtonProps, Pressable, PressableProps, useColorScheme, ViewProps } from 'react-native'
import { Label, Span } from './typographie'
import { twMerge } from 'tailwind-merge'



const variants = cva(
    [
        "py-8",
        "px-10",
        "w-full",
        "rounded-xl",
        "flex",
        "items-center",
        "justify-center",
    ],
    {
        variants: {
            variant: {
                contain: ["bg-white text-white", "border-transparent"],
                // outline: [handleSchemeColor() === "light" ? "text-black border-black" : "text-white border-white", "border-2 bg-transparent"]
            }
        },
    }
)

type UiButtonProps = {
    children: ReactNode
} & PressableProps & VariantProps<typeof variants>

const Button = ({ variant, children, className, ...rest }: UiButtonProps) => {
    const color = useColorScheme()

    return (
        <Pressable className={cn(variants({ variant, className, }),color === "dark" && variant === "contain" ? "bg-white" : "bg-black")} {...rest}>
            <Label className={twMerge(color === "dark" && variant === "contain" ? "text-black" : "text-white","font-semibold text-2xl")}>
                {children}
            </Label>
        </Pressable>
    )
}

export default Button