import React, {useEffect} from 'react'
import { View, Text, Alert, StyleSheet, Dimensions} from 'react-native'
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
    senha: string().required('*Digite sua senha!').min(6, 'A senha deve conter pelo menos 6 dígitos')
})
  const {register, setValue, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(fieldsValidationSchema)
  })
  

  const  onSubmit = (data: Input) => {
     navigation.navigate('mainscreens')
  }

  useEffect(() => {
    register('email');
    register('senha');
    
  }, [register])

  return (
    <View style={styles.body}>
      <View style={styles.container}>

        <Text style={styles.title}>Login</Text>
          
        <TextField label={'Email'} placeholder={'Digite seu email'} onChangeText={(text: string) => setValue( "email", text)} error={errors?.email} style={errors.email ? styles.error: styles.input} />
        <TextField label={'Senha'} placeholder={'Digite sua senha'} onChangeText={(text: string) => setValue( "senha", text)} error={errors?.senha} style={errors.senha ? styles.error: styles.input} secureTextEntry={true}/>
        <AppButton onPress={handleSubmit(onSubmit)} title={'Entrar'}/>
        
      </View>
      <View style={styles.line} />
      <Text style={styles.smallText} onPress={() => navigation.navigate('Autocadastro')}>
        Não tem uma conta? Toque para criar uma
      </Text>
    </View>
  )
}


const  styles = StyleSheet.create({

  body: {
    backgroundColor: "#fff",
    height: "100%"
},

error: {
  backgroundColor: '#F1F5F4',
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
  width: '90%',
  height: Dimensions.get('window').height * 0.5,
  marginTop: 190, 
  marginLeft: 20,
  backgroundColor: '#fff',
},

title : {
  
  color: "#094275",
  fontSize: 40,
  marginTop: 30,
  
},

input: {
  backgroundColor: '#F1F5F4',
  borderRadius: 20,
  width: 300,
  height: 60,
  paddingLeft: 20,

},

password: {
  width: "90%",
  height: 50,
  borderColor: 'black',
  borderWidth: 2
  
},

line: {
  borderBottomColor: '#717F7F',
  borderBottomWidth: 1,
  marginTop: 150

},

smallText: {
  color: '#717F7F',
  left: 40,
  top: 45,
  fontSize: 17
}, 

})

export default Login