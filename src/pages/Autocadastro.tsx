import React from 'react'
import { View , StyleSheet, Text} from 'react-native'
import Forms from '../components/Forms'


const Autocadastro = (): React.JSX.Element => {

  return (

    <View style={styles.body}>
        <Forms method='POST'/>
        
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    height: "100%"
},
  line: {
    borderBottomColor: '#717F7F',
    borderBottomWidth: 1,
    marginTop: 10  
  },
  
  smallText: {
    color: '#717F7F',
    left: 40,
    top: 45,
    fontSize: 17
  }, 
})

export default Autocadastro