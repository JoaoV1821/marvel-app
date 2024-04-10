import React from 'react'
import { View, StyleSheet } from 'react-native'
import Forms from '../components/Forms'

const UpdateCadastro = (): React.JSX.Element => {
  return (
    <View  style={styles.body}>
        <Forms method='PUT'/>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    height: "100%"
},

})


export default UpdateCadastro