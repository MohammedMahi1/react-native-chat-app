
import { createStackNavigator } from '@react-navigation/stack';
import OnBoard from 'screens/onBoard';
import TabsNavigator from './tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import { useColorScheme } from 'react-native';

const Stack = createStackNavigator();


const Navigation = () => {
  const scheme = useColorScheme();

  NavigationBar.setBackgroundColorAsync(scheme === 'dark' ? '#000000' : '#ffffff');

  return (
    <SafeAreaView style={{flex: 1}}>

    <Stack.Navigator 
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0, // remove shadow on Android
      },
    })}
    >
        <Stack.Screen name="OnBoard" component={OnBoard} />
        <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
    </Stack.Navigator>
    </SafeAreaView>
  );
};
export default Navigation;
