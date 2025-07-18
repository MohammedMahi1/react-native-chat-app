
import { createStackNavigator } from '@react-navigation/stack';
import OnBoard from 'screens/onBoard';
import TabsNavigator from './tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import { useColorScheme } from 'react-native';
import {EmailScreen} from 'screens/auth/with-email/EmailScreen';
import PhoneScreen from 'screens/auth/with-phone/PhoneScreen';
import AuthFlow from './authFlow';
export type RootStackParamList = {
  OnBoard: undefined;
  TabsNavigator: undefined;
  Auth: undefined; // 👈 this will point to AuthFlow
};

const Stack = createStackNavigator<RootStackParamList>();


const Navigation = () => {
  const scheme = useColorScheme();

  NavigationBar.setBackgroundColorAsync(scheme === 'dark' ? '#000000' : '#ffffff');
  const isAuth = false;
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

        {
          isAuth ?
          <Stack.Screen name="TabsNavigator" component={TabsNavigator} /> :
          
            <>
              <Stack.Screen name="OnBoard" component={OnBoard} />
              <Stack.Screen name="Auth" component={AuthFlow} />
           </>
        
        }
    </Stack.Navigator>

    </SafeAreaView>
  );
};
export default Navigation;
