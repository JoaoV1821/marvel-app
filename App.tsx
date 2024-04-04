import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Autocadastro from './src/pages/Autocadastro';
import UpdateCadastro from './src/pages/UpdateCadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tab = () => {
  <Tab.Navigator>
    <Tab.Screen name="UpdateCadastro" component={UpdateCadastro} />
    <Tab.Screen name="Settings" component={Autocadastro} />
  </Tab.Navigator>
}

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Autocadastro">
        <Stack.Screen name="Autocadastro" component={Autocadastro} />
        <Stack.Screen name="UpdateCadastro" component={UpdateCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
