import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import {Carousel, MiddleCarousel} from '../components/Carousel'
import { SafeAreaView } from 'react-native-safe-area-context'

const carouselData = [
  {
    id: '01',
    image: require('../../assets/comic.jpg'),
    date: '23/04/2023'
  },

  {
    id: '02',
    image: require('../../assets/comic.jpg'),
    date: '23/04/2023'
  },

  {
    id: '03',
    image: require('../../assets/comic.jpg'),
    date: '23/04/2023'
  },

  {
    id: '04',
    image: require('../../assets/comic.jpg'),
    date: '23/04/2023'
  },

  


];

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
      <Carousel data={carouselData}/>
      <View style={{marginTop: 20}}>
        <Text style={{color:'white', marginLeft: 15}}>Alugados</Text>
        <MiddleCarousel data={carouselData} local='middle'/>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{color:'white', marginLeft: 15}}>Recomendados</Text>
        <MiddleCarousel data={carouselData}/>
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