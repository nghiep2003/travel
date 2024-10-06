import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screen/HomeScreen';
import SplashScreen from './src/screen/SplashScreen';

import SignInScreen from './src/screen/SignInScreen';
import Register from './src/screen/RegisterScreen';
 const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App