import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';
import User from '../models/UserModel';

const Forms = (props: {method: string}) => {

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [telefone, setTelefone] = useState('');

const user : User  = new User(nome, email, senha, telefone);

  const handleSubmit = () =>{
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
      <TextInput  placeholder="Nome" onChangeText={(text) => setNome(text)} />
      <TextInput  placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput  placeholder="Senha" onChangeText={(text) => setSenha(text)} />
      <TextInput  placeholder="Telefone" onChangeText={(text) => setTelefone(text)}/>
      <Button title='Enviar' onPress={handleSubmit}/>
    </View>
  )
}

export default Forms