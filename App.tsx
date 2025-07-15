import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import {  Platform, useColorScheme } from 'react-native';
import { useEffect, useMemo } from 'react';
import 'react-native-gesture-handler';
import * as NavigationBar from 'expo-navigation-bar';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabsNavigator from 'navigation/tabs';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const scheme = useColorScheme();
  NavigationBar.setBackgroundColorAsync(scheme === 'dark' ? '#000000' : '#ffffff');
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
