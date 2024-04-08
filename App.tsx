import React from 'react';
import Autocadastro from './src/pages/Autocadastro';
import UpdateCadastro from './src/pages/UpdateCadastro';
import Aluguel from './src/pages/Aluguel';
import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const MainScreens = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Dashboard"  screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: '#094275',    
      tabBarActiveBackgroundColor: '#094275'
    }}>
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="UpdateCadastro" component={UpdateCadastro} />
    <Tab.Screen name="Aluguel" component={Aluguel} />
  </Tab.Navigator>
  )
}


export default function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Autocadastro" component={Autocadastro} options={{headerShown: false}} />
          <Stack.Screen name="mainscreens" component={MainScreens} options={{headerShown: false}} />
      </Stack.Navigator>

    </NavigationContainer>
  )
  
}
