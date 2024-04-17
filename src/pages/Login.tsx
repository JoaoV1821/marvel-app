import React, {useEffect} from 'react'
import { View, Text, Alert, StyleSheet, Dimensions, Image, ImageBackground} from 'react-native'
import { useForm } from 'react-hook-form'
import TextField from '../components/TextField';
import { yupResolver } from "@hookform/resolvers/yup"
import {object, string} from 'yup'
import { AppButton } from '../components/AppButtons';

interface Input {
  email: string,
  senha: string
}

const Login = ({navigation}): React.JSX.Element => {
  const fieldsValidationSchema = object().shape({
    email: string().required('*Digite seu email!').email('*Email inválido!'),
    senha: string().required('*Digite sua senha!').min(6, '*A senha deve conter pelo menos 6 dígitos')
})
  const {register, setValue, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(fieldsValidationSchema)
  })
  

  const  onSubmit = (data: Input) => {
     navigation.navigate('drawler')
  }

  useEffect(() => {
    register('email');
    register('senha');
    
  }, [register])

  return (
    <View>
      
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.img} imageStyle={{opacity:0.65, backgroundColor: '#000'}} >

          <View style={styles.imgBack}>
            <View style={styles.opacity}>
            <Image source={require('../../assets/logo.png')} style={{width: '80%', height: '30%', top: 90, left: 40}}/>
            <View style={styles.loginContainer}>
            
                  <TextField label={'Email'} placeholder={'Digite seu email'} onChangeText={(text: string) => setValue( "email", text)} error={errors?.email} style={errors.email ? styles.error: styles.input}   placeholderTextColor={'white'} />
                  <TextField label={'Senha'} placeholder={'Digite sua senha'} onChangeText={(text: string) => setValue( "senha", text)} error={errors?.senha} style={errors.senha ? styles.error: styles.input} secureTextEntry={true} placeholderTextColor={'white'}/>
                  <AppButton onPress={handleSubmit(onSubmit)} title={'Entrar'}/>
                  <Text style={styles.smallText} onPress={() => navigation.navigate('Autocadastro')}>
                      Não tem uma conta? Toque para criar uma
                  </Text>
              </View>
           </View>
             
    
        </View>
      
        </ImageBackground>

      </View>

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
    height: '100%'
  },

  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: 170,
    opacity: 1.0
  },

  error: {
    backgroundColor: '#414141',
    borderRadius: 20,
    width: 300,
    height: 60,
    paddingLeft: 20,
    borderColor: '#FF0000',
    borderWidth: 1,
    color: 'white'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: Dimensions.get('window').height * 1.1, 
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

export default Login