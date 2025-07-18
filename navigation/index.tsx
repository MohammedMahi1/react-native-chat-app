
import { createStackNavigator } from '@react-navigation/stack';
import OnBoard from 'screens/onBoard';
import TabsNavigator from './tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import { useColorScheme } from 'react-native';
import AuthFlowEmail from './auth-route/authFlowEmail';
import AuthFlowPhone from './auth-route/authFlowPhone';


export type RootStackParamList = {
  OnBoard: undefined;
  TabsNavigator: undefined;
  AuthEmail: undefined;
  AuthPhone: undefined;
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
              <Stack.Screen name="AuthEmail" component={AuthFlowEmail} />
              <Stack.Screen name="AuthPhone" component={AuthFlowPhone} />
           </>
        
        }
    </Stack.Navigator>

    </SafeAreaView>
  );
};
export default Navigation;
