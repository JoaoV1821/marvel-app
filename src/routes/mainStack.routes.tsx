import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreens } from "./mainsScreens.routes";
import { Drawler } from "./drawler.routes";
import Login from "../pages/Login";
import Autocadastro from "../pages/Autocadastro";
import UpdateCadastro from "../pages/UpdateCadastro";



const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        
          <Stack.Navigator initialRouteName='Login'>

              <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
              <Stack.Screen name="Autocadastro" component={Autocadastro} options={{headerShown: false}} />
              <Stack.Screen name="drawler" component={Drawler} options={{headerShown: false}}/>
          </Stack.Navigator>
    

      )    
}
