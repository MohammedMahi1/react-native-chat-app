type VariantConfig = {
    [variantName: string]: {
        [value: string]: any;
    };
};

type SVAOptions = {
    base?: any;
    variants?: VariantConfig;
    defaultVariants?: { [key: string]: string };
};

export function sva(styles: SVAOptions) {
    return (options?: { [key: string]: string }) => {
        const merged: any[] = [];

        if (styles.base) merged.push(styles.base);

        const applied = { ...styles.defaultVariants, ...options };

        for (const variant in styles.variants) {
            const value = applied[variant];
            if (value && styles.variants[variant][value]) {
                merged.push(styles.variants[variant][value]);
            }
        }

        return merged;
    };
}