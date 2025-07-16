import React from 'react'
import { Modal, ModalProps, SafeAreaView, Text, useColorScheme, View } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar';

type BottomModalProps = ModalProps & {
    children: React.ReactNode
}

const BottomModal = ({ children, ...props }: BottomModalProps) => {
    const scheme = useColorScheme();


    return (
        <Modal
            animationType="slide"
            {...props}
            transparent={true}
            statusBarTranslucent={true}
            navigationBarTranslucent={true}
        >
            <View style={{ padding:24,justifyContent: 'flex-end',width:"100%",flex: 1,backgroundColor: '#00000040' }}>
                {children}
            </View>
        </Modal>
    )
}

export default BottomModal