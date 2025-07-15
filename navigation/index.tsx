
import { createStackNavigator } from '@react-navigation/stack';
import OnBoard from 'screens/onBoard';
import TabsNavigator from './tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();


const Navigation = () => {
  return (
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
  );
};
export default Navigation;
