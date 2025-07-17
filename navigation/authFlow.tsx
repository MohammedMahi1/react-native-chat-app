import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EmailScreen } from 'screens/auth/with-email/EmailScreen';
import { PasswordScreen } from 'screens/auth/with-email/PasswordScreen';

export type AuthStackParamList = {
  Email: undefined;
  Password: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlow = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Email" component={EmailScreen} />
      <AuthStack.Screen name="Password" component={PasswordScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthFlow;