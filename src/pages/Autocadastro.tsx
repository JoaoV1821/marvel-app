import React from 'react'
import { View , StyleSheet, Text, Dimensions, ImageBackground} from 'react-native'
import Forms from '../components/Forms'



const Autocadastro = ({navigation}): React.JSX.Element => {
  
  return (

    <View style={styles.body}>
       <ImageBackground source={require('../../assets/background.jpg')} style={styles.img} imageStyle={{opacity:0.65, backgroundColor: '#000'}} >

       <View style={styles.imgBack}>

       <View style={styles.opacity}>
       <Text style={{color: 'white', fontSize: 20, top: 70, left: 15}} onPress={()=>{navigation.navigate("Login")}}> Voltar </Text>
       <View style={styles.loginContainer}>
       

        <Forms method='POST'/>


      </View>
        

       </View>
       </View>

       </ImageBackground>
       
    </View>
  )
}

const  styles = StyleSheet.create({

  body: {
    backgroundColor: "#fff",
    height: "100%",

},

  imgBack: {
    flexDirection:'column',  
    alignItems:"center" , 
    justifyContent:"space-around", 
    width: '100%',
    height: '100%'
  },

  opacity: {
    backgroundColor: '#000',
    opacity: 0.75,
    width: '100%',
    height: '100%',
  },

  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: 190,
    opacity: 1.0
  },

  error: {
    backgroundColor: '#414141',
    borderRadius: 20,
    width: 300,
    height: 60,
    paddingLeft: 20,
    borderColor: '#FF0000',
    borderWidth: 1
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: Dimensions.get('window').height * 1.2, 
  },

  title : {
    color: "#094275",
    fontSize: 40,
    marginTop: 30,
  },

  input: {
    backgroundColor: '#414141',
    opacity: 1.0,
    color:'white' ,  
    borderRadius: 20,
    width: 300,
    height: 60,
    paddingLeft: 20,
    marginBottom: 25,
  },

  password: {
    width: "90%",
    height: 50,
    borderColor: 'black',
    borderWidth: 2
  },

  line: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    
  },


  smallText: {
    color: '#fff',
    left: 5,
    top: 45,
    fontSize: 17
  },

  img : {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%',
  
  }

})

export default Autocadastro