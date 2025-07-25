import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";


type StyleValue = StyleProp<ViewStyle & TextStyle & ImageStyle>;
type ConfigSchema = Record<string, Record<string, StyleValue>>;
type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;
type ConfigVariants<T extends ConfigSchema> = {
    [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};
interface Config<T extends ConfigSchema> {
    base?: StyleValue;
    variants?: T;
    defaultVariants?: ConfigVariants<T>;
}
type Props<T extends ConfigSchema> = ConfigVariants<T>;
type OmitUndefined<T> = T extends undefined ? never : T;

export type VariantProps<Component extends (...args: any) => any> =
    OmitUndefined<Parameters<Component>[0]>;

function falsyToString<T extends unknown>(value: T) {
    if (typeof value == "boolean") {
        return `${value}`;
    }
    if (value === 0) {
        return "0";
    }
    return value;
}

export default function sva<T extends ConfigSchema>(
    config?: Config<T>,
): (props?: Props<T>) => StyleValue {
    return function (props?: Props<T>) {
        if (!config?.variants) {
            return config?.base;
        }
        const { variants, defaultVariants } = config;
        const styles = Object.keys(variants).map(
            (variant: keyof typeof variants) => {
                const variantProp = props?.[variant];
                const defaultVariantProp = defaultVariants?.[variant];

                const variantKey = (falsyToString(variantProp) ||
                    falsyToString(
                        defaultVariantProp,
                    )) as keyof (typeof variants)[typeof variant];

                return variants[variant][variantKey];
            },
        );
        if (config.base) {
            return [config.base, ...styles];
        }
        return styles;
    };
}