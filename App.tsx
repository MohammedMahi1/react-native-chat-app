import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import {  Platform, useColorScheme } from 'react-native';
import { useEffect, useMemo } from 'react';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabsNavigator from 'navigation/tabs';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from 'store/store';
export default function App() {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>

    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar 
      style={scheme === 'dark' ? 'light' : 'dark'}
      backgroundColor={scheme === 'dark' ? '#000000' : '#ffffff'} 
      translucent={false}/>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
      </Provider>
  );
}
