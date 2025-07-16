import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "components/navigation/TabBar";
import { SafeAreaView, useColorScheme, View } from "react-native";
import Cart from "screens/tabs/cart";
import Home from "screens/tabs/home";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  const scheme = useColorScheme();
    return (
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
        tabBar={props => <TabBar {...props} />}
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    );
};

export default TabsNavigator