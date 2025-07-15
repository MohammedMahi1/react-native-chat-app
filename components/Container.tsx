import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';

export const Container = ({ children }: { children: React.ReactNode }) => {
  
    
  return <SafeAreaView  style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>{children}</SafeAreaView>;
};

