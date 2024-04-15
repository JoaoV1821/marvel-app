import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackNavigator } from './src/routes/mainStack.routes';




export default function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  )
  
}
