import React from 'react'
import { Modal, ModalProps, SafeAreaView, Text, useColorScheme, View } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar';
import { useAppDispatch, useAppSelector } from 'hooks/hook';

type BottomModalProps = ModalProps & {
    children: React.ReactNode;
    id: string;
}

const BottomModal = ({ children,id, ...props }: BottomModalProps) => {
    const scheme = useColorScheme();
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.modal.modals[id]);

    return (
        <Modal
            animationType="slide"
            {...props}
            transparent={true}
            statusBarTranslucent={true}
            navigationBarTranslucent={true}
        >
            <View style={{ padding:24,justifyContent: 'flex-end',width:"100%",flex: 1 }}>
                {children}
            </View>
        </Modal>
    )
}

export default BottomModal