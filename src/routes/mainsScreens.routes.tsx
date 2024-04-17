import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Aluguel from '../pages/Aluguel';
import Dashboard from '../pages/Dashboard';
import Menu from "../pages/Configuracoes";
import Consulta from "../pages/Consulta";
import Ionicons from '@expo/vector-icons/Ionicons'

export const MainScreens = ({navigation}) => {
    const Tab = createBottomTabNavigator();

    return (
      
    <Tab.Navigator initialRouteName="Dashboard"  screenOptions={({route}) => ({ 
  
        tabBarIcon: ({focused, color, size,}) => {
          let iconName: any;
      
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home'; 
  
          } else if (route.name ==='Aluguel') {
            iconName = focused ? 'wallet' : 'wallet';
  
          } else if (route.name === 'Meus Aluguéis') {
            iconName = focused ? 'book' : 'book';
            
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu': 'menu';
          
          }
  
          return <Ionicons name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveBackgroundColor: '#000',    
        tabBarActiveBackgroundColor: '#000',
        tabBarStyle: {
          height: '8%',
        },

        })}>
  
        <Tab.Screen name="Dashboard" component={Dashboard}  options={{headerShown: false}} />
        <Tab.Screen name="Aluguel" component={Aluguel}  options={{headerShown: false}}/>
        <Tab.Screen name="Meus Aluguéis" component={Consulta}  options={{headerShown: false}} /> 
        <Tab.Screen name="Menu" component={Menu} listeners={{
            tabPress: (e) => {
              navigation.openDrawer()
              e.preventDefault();
            },
          }}/>     
     
    </Tab.Navigator>
      
       
    )
}