import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import {Carousel, MiddleCarousel} from '../components/Carousel'
import { SafeAreaView } from 'react-native-safe-area-context'

const carouselData = [
  {
    id: '01',
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb4ecb6aa5a9.jpg',
    date: '23/04/2023'
  },

  {
    id: '02',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7.jpg',
    date: '23/04/2023'
  },

  {
    id: '03',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg',
    date: '23/04/2023'
  },

  {
    id: '04',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    date: '23/04/2023'
  },

];

const caroussel= [
  {
    id: '01',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890.jpg',
  
  },

  {
    id: '02',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7.jpg',
  
  },

  {
    id: '03',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg',
    
  },

  {
    id: '04',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75.jpg',
    
  },

];



const topCaroussel = [
  {
    image: require('../../assets/p1.jpg')
  },

  {
    image: require('../../assets/p2.jpg')
  },

  {
    image: require('../../assets/p3.jpg')
  }
]

export const Card = (props) => {
  return (
      <View style={style.card}>
              <Text>{props.title}</Text>
              <Text>{props.text}</Text>
      </View>
  )
}

const Dashboard = (): React.JSX.Element => {

  return (
    <SafeAreaView style={style.body}>      
      <Carousel data={topCaroussel}/>
      <View style={{marginTop: 20}}>
        <Text style={{color:'white', marginLeft: 15}}>Alugados</Text>
        <MiddleCarousel data={carouselData} local='middle'/>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{color:'white', marginLeft: 15}}>Recomendados</Text>
        <MiddleCarousel data={caroussel}/>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({

  title: {
    color: "white",
    fontSize: 40,
    marginTop: 60,
    marginLeft:10,
    marginBottom: 10
 },

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

container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginRight: 10,
  
    height: '100%',
    backgroundColor: '#000'
}


})

export default Dashboard