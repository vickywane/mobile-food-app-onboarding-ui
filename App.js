import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/login'
import Signup from './src/screens/signup'
import ResetPassword from './src/screens/resetPassword'
import ResetPasswordCode from './src/screens/resetPasswordCode'
import Home from './src/screens/Home'
import SplashScreen from './src/screens/SplashScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} >
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} component={SplashScreen} name="SplashScreen" />
            <Stack.Screen options={{ headerShown: false }} component={Home} name="home" />
            <Stack.Screen options={{ headerShown: false }} component={Signup} name="signup" />
            <Stack.Screen options={{ headerShown: false }} component={ResetPassword} name="resetPassword" />
            <Stack.Screen options={{ headerShown: false }} component={Login} name="login" />
            <Stack.Screen options={{ headerShown: false }} component={ResetPasswordCode} name="resetPasswordCode" />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}