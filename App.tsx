import React from 'react';
import Autocadastro from './src/pages/Autocadastro';
import UpdateCadastro from './src/pages/UpdateCadastro';
import Aluguel from './src/pages/Aluguel';
import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import Settings from './src/pages/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import {View} from 'react-native';
import { MainStackNavigator } from './src/navigation/MainStack';
import { DrawerNavigator } from './src/navigation/Drawer';



export default function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  )
  
}
