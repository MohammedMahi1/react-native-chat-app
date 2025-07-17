import React from 'react'
import { Modal, ModalProps, SafeAreaView, Text, TouchableWithoutFeedback, useColorScheme, View } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { closeModal } from 'libs/redux-toolkit/modalSlice';

type BottomModalProps = ModalProps & {
    children: React.ReactNode;
    id: string;
}

const BottomModal = ({ children, id, ...props }: BottomModalProps) => {
    const scheme = useColorScheme();
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.modal.modals[id]);

    return (
        <View style={{ flex: 1, backgroundColor: "#00000050",position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1000 }}>
            <Modal
                animationType="slide"
                visible={isOpen}
                transparent={true}
                onRequestClose={() => dispatch(closeModal(id))}
                onDismiss={() => console.log("dismissed")}
                statusBarTranslucent={true}
                navigationBarTranslucent={true}
                {...props}
            >

                <View style={{ padding: 24, justifyContent: 'flex-end', width: "100%", flex: 1 }} >
                    {children}
                </View>
            </Modal>
        </View>
    )
}

export default BottomModal