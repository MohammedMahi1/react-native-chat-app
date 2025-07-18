import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Link from 'components/navigation/Link';
import { T } from 'components/ui/Typographies';
import React from 'react'
import { Image, Pressable, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreensSwipieProps = {
    header: React.ReactNode;
    body: React.ReactNode;
    goBack?: boolean;
    iconed?: boolean;
}

const ScreensSwipie = ({ header, body, goBack = true, iconed = true }: ScreensSwipieProps) => {
    const navigation = useNavigation();
    const theme = useColorScheme();
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between", alignItems: "flex-start" }}>

            <View style={{ gap: 24, flex: 1, width: "100%" }}>
                {
                    goBack && (
                        <View>
                            <Pressable onPress={() => navigation.goBack()} >
                                <FontAwesome6 name="arrow-left-long" size={32} color={theme === 'dark' ? '#ffffff' : '#0A0A0A'} />
                            </Pressable>
                        </View>
                    )
                }
                {
                    iconed && theme === "dark" &&
                    <Image source={require("../../assets/SwipletLogoDark.png")} />
                }
                {
                    iconed && theme === "light" &&
                    <Image source={require("../../assets/SwipletLogoLight.png")} />
                }
                {header}
                {body}
            </View>
            <View style={{ alignItems: "center" }}>
                <T.Span style={{ color: theme === "dark" ? "#525252" : "#A3A3A3" }}>
                    Hi I’m Mohammed Mahi, Checkout my profile on GitHub,
                </T.Span>
                <Link href="https://github.com/MohammedMahi1" style={{ color: theme === "dark" ? "#A3A3A3" : "#525252" }}>MohammedMahi1 </Link>
            </View>
        </SafeAreaView>
    )
}

export default ScreensSwipie