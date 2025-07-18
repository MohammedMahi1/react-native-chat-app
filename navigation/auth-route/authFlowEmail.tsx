import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EmailScreen } from 'screens/auth/with-email/EmailScreen';
import { PasswordScreen } from 'screens/auth/with-email/PasswordScreen';
import {VerifyCode} from 'screens/auth/with-email/VerifyCode';
import { FullNameScreen } from 'screens/auth/with-email/FullNameScreen';
import { PhoneScreen } from 'screens/auth/with-phone/PhoneScreen';

export type AuthStackParamList = {
  Email: undefined;
  Phone: undefined;
  Password: undefined;
  VerifyCode: undefined;
  FullName: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowEmail = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Email" component={EmailScreen} />
      <AuthStack.Screen name="Phone" component={PhoneScreen} />
      <AuthStack.Screen name="Password" component={PasswordScreen} />
      <AuthStack.Screen name="VerifyCode" component={VerifyCode} />
      <AuthStack.Screen name="FullName" component={FullNameScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthFlowEmail;