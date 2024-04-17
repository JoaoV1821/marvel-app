import React from 'react'
import { View, Text, StyleSheet,} from 'react-native';
import { AppButton } from '../components/AppButtons';


const Menu = (props) => {

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.container}>
          <Text style={styles.link}>Perfil</Text>
          <Text style={styles.link} onPress={() => props.navigation.navigate('UpdateCadastro')}>Atualizar Dados</Text>
          <Text style={styles.link}>Compartilhar aplicativo</Text>
          <Text style={styles.link}>Sobre</Text>
      </View>
      <AppButton marginLeft={90} title={'Logout'} marginTop={170} onPress={() => props.navigation.navigate('Login')}/>
    </View>
  )
}

export default Menu

const  styles = StyleSheet.create({
  title : {
    fontSize: 55,
    color: '#fff',
    marginTop: 90,
    marginLeft: 30,
    marginBottom: 20
},

body: {
  backgroundColor: '#000',
  height: '100%'
},

link : {
  fontSize : 30,
  marginLeft: 20,
  marginBottom: 20,
  color: 'white'
},

container : {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginLeft: 20,
  marginTop: 80
}
})