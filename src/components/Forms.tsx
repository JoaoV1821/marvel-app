import React, {useEffect} from 'react';
import { View, Button, Dimensions, StyleSheet, Text } from 'react-native';
import {useForm} from 'react-hook-form'
import TextField from './TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import {object, string} from 'yup';
import User from '../models/UserModel';
import { AppButton } from './AppButtons';

interface Input {
  email: string,
  nome: string,
  senha: string,
  telefone: string
}

const Forms = (props: {method: string}) => {

const validationSchema = object().shape({
  nome: string().required("*Digite seu nome!").min(3),
  email: string().required('*Digite seu email!').email('*E-mail inválido!'),
  senha: string().required('*Digite sua senha!').min(6, 'A senha deve conter pelo menos 6 dígitos'),
  telefone: string().matches(new RegExp('[0-9]{2}9[0-9]{8}'), '*Digite um telefone válido!').required('*Digite seu telefone!').length(11, '*Digite um telefone válido!')
})

const {register, setValue, handleSubmit, formState: {errors}} = useForm({
  resolver: yupResolver(validationSchema)
})

useEffect(() => {
  register('nome');
  register('email');
  register('senha');
  register('telefone')
}, [])  

  const onSubmit = (data: Input) => {
    const user : User  = new User(data.nome, data.email, data.senha, data.telefone);

    if(props.method === "POST") {
      user.cadastrar()
      console.log('POST')

    } else if (props.method === "PUT") {
      user.atualizar();
      console.log('PUT')

    }
  }
  
  return (
    <View>
      <Text style={styles.title}>{props.method == 'POST' ?'Autocadastro': 'Atualização' }</Text>
      <View style={styles.container}>
      
        <TextField label={'Nome'}  style={errors.nome ? styles.error: styles.input} placeholder="Nome" onChangeText={(text: string) => setValue('nome', text)} error={errors?.nome} />
        <TextField label={'Email'} placeholder="Email" onChangeText={(text: string) => setValue('email', text)} error={errors?.email}  style={errors.email ? styles.error: styles.input} />
        <TextField label={'Senha'} placeholder="Senha" onChangeText={(text: string) => setValue('senha', text)} error={errors?.senha}  style={errors.senha ? styles.error: styles.input} secureTextEntry={true} />
        <TextField  label={'Telefone'} placeholder="Telefone" onChangeText={(text: string) => setValue('telefone', text)} error={errors?.telefone}  style={errors.telefone ? styles.error: styles.input}/>
        <AppButton title='Enviar' onPress={handleSubmit(onSubmit)} />
      </View>
      
    </View>
  )
}

const  styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    height: "100%",
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
  height: Dimensions.get('window').height * 0.5, // Ajusta a altura para 50% da altura da tela
  marginTop: 30, // Remove o marginTop anterior
  marginLeft: 20,
  backgroundColor: '#fff',
},

title : {
  color: "#094275",
  fontSize: 40,
  marginTop: 130,
  textAlign: 'center'
  
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


})
export default Forms