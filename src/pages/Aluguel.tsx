import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'


const carouselData = [
  {
    id: '01',
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb4ecb6aa5a9.jpg',
    title: 'Titulo 1'
  },

  {
    id: '02',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7.jpg',
    title: 'Titulo 2'
  },

  {
    id: '03',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg',
    title: 'Titulo 3'
  },

  {
    id: '04',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    title: 'Titulo 4'
  },

];


const Card = (props) => {
    return (
      <View style={style.card}>
        <Image source={{uri: props.image}}/>
        <Text>{props.title}</Text>
      </View>
    )
}


const Aluguel = (): React.JSX.Element => {
  return (
    <View style={style.body}>
     {
      carouselData.map((item) => {
        console.log(item)

        return (
          
            <Card image={item.image} title={item.title} />
          
        )
      })
     }
    </View>
  )
}

const style = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    height: '100%',
   },

   
  card : {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F1F5F4',
    borderRadius: 10,
    width: 300,
    height: 82,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
    padding: 10,
    marginTop: 10
},
})


export default Aluguel