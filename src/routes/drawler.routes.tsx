import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UpdateCadastro from '../pages/UpdateCadastro';
import { MainScreens } from './mainsScreens.routes';
import Profile from '../pages/Profile';
import { AppButton } from '../components/AppButtons';
import {SafeAreaView, View, StyleSheet, Image, Text, Linking, } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

import React from 'react';

const stack = createDrawerNavigator();

export const Drawler = ({navigation}) => {

  const CustomSidebarMenu = (props) => {
    const currentUser = useSelector((state: RootState) => state.currentUser);
    const foto = currentUser.user.foto;
    console.log(currentUser.user.foto)
    return (
      <SafeAreaView style={{display:'flex', height: '75%'}}>
        
        <Image
          source={{uri: currentUser.user.foto}}
          style={styles.sideMenuProfileIcon}
        />
  
        <Text style={{fontSize: 30, color: 'white', marginLeft: 90, marginTop: 35, marginBottom: 0 }}>{currentUser.user.nome}</Text>
        <DrawerContentScrollView {...props} >
          <DrawerItemList {...props} style={{top: 10}}/>
        
           
        </DrawerContentScrollView>
        <AppButton marginLeft={10} title={'Logout'} top={5} onPress={() => navigation.navigate('Login')}/>
  
      </SafeAreaView>
    );
  };
  
    return (
      <NavigationContainer independent={true}  >
        <stack.Navigator initialRouteName="mainscreens"  screenOptions={
          { 
            drawerStyle:{backgroundColor:'#000', opacity: 0.65},
            
            drawerActiveTintColor: '#FF0000',
            drawerInactiveTintColor: '#FFF',
            drawerPosition: 'right'
        }
          }
          
          drawerContent={props => <CustomSidebarMenu {...props}/>}>

          <stack.Screen name="mainscreens" component={MainScreens} options={{headerShown: false, title: 'Início'}} />
          <stack.Screen name="Alterar Cadastro" component={UpdateCadastro} options={{headerShown: false, drawerLabel: 'Alterar Cadastro'}} />
        
        </stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
   
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 35, 
    top: 70,   
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
  
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    top: 0,
    height: '35%',
    
  },
});