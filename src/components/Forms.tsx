import React, {useEffect, useState} from 'react';
import { View, Button, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useForm} from 'react-hook-form'
import TextField from './TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import {object, string} from 'yup';
import User from '../models/UserModel';
import { AppButton } from './AppButtons';
import * as ImagePicker from 'expo-image-picker';


interface Input {
  email: string,
  nome: string,
  senha: string,
  telefone: string
}

const Forms = (props: {method: string}) => { 
  const [selectedImage, setSelectedImage] = useState(null);

  function ImageViewer() {
 
    if(selectedImage) {
      return <Image source={{uri: selectedImage}} style={styles.photoSelected}/>
    } else {
      return <Image source={require('../../assets/add-photo.png')} style={styles.photo}/>
    }
  }
  

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });


    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };


const validationSchema = object().shape({
  nome: string().required("*Digite seu nome!").min(3, '*O nome deve ter ao menos 3 caracteres'),
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
    <View style={styles.body}>
      
      <TouchableOpacity onPress={pickImageAsync} style={styles.photoButton}>
          {ImageViewer()}
      </TouchableOpacity>

  
      <View style={styles.container}>
      
        <TextField label={'Nome'}  style={errors.nome ? styles.error: styles.input} placeholder="Digite seu nome" onChangeText={(text: string) => setValue('nome', text)} error={errors?.nome} />
        <TextField label={'Email'} placeholder="Digite seu email" onChangeText={(text: string) => setValue('email', text)} error={errors?.email}  style={errors.email ? styles.error: styles.input} />
        <TextField label={'Senha'} placeholder="Digite sua senha" onChangeText={(text: string) => setValue('senha', text)} error={errors?.senha}  style={errors.senha ? styles.error: styles.input} secureTextEntry={true} />
        <TextField  label={'Telefone'} placeholder="Digite seu telefone" onChangeText={(text: string) => setValue('telefone', text)} error={errors?.telefone}  style={errors.telefone ? styles.error: styles.input}/>
        <AppButton title='Enviar' onPress={handleSubmit(onSubmit)} />
      </View>
      
    </View>
  )
}

const  styles = StyleSheet.create({
  body: {
    
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
  marginLeft: 20,

},


photo: {
  width: 100,
  height: 100,
  borderRadius: 20,
  top: 10,
  left: 10
  
},

photoSelected: {
  width: 120,
  height: 120,
  borderRadius: 50
},

photoButton: {
  backgroundColor: '#000',
  width: 120,
  height: 120,
  borderRadius: 50,
  alignItems:  "center",
  left: 100,
  top: -40,

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