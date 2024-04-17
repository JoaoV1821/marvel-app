import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Forms from '../components/Forms'

const UpdateCadastro = ({navigation}): React.JSX.Element => {
  return (
    <View  style={styles.body}>

    <Text style={{color: 'white', fontSize: 20, top: 70, left: 15}} onPress={()=>{navigation.navigate('mainscreens')}}> Voltar </Text>

      <View style={styles.loginContainer}>
        <Forms method='PUT'/>
      </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000",
    height: "100%"
},

loginContainer: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: 190,
  opacity: 1.0
},

})

export default UpdateCadastro