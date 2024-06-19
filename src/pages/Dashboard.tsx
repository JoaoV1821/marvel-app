import React, { useState, useEffect } from 'react'
import { View , Text, StyleSheet} from 'react-native'
import {Carousel, MiddleCarousel} from '../components/Carousel'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getComicList } from '../services/API'
import ComicModel from '../models/ComicsModel'


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

  const [response, setResponse] = useState([]);
  const [comics, setComics] = useState([]);
  
  const handleResponse =  async () => {
      const result = await getComicList();
      const hqs = [];

      console.log(result['results']);

      result.map((comic: any) => {
        const hq = new ComicModel(comic.id, comic.title, `${comic.thumbnail.path}.${comic.thumbnail.extension}`);
        console.log(hq);
        hqs.push(hq);
      })

      setResponse(hqs);
      console.log(response);

  }

  useEffect (() => {
      handleResponse();
  }, [])
  

  return (
 
    <SafeAreaView style={style.body}>      
      <Carousel data={topCaroussel}/>
      <View style={{marginTop: 20}}>
        <Text style={{color:'white', marginLeft: 15}}>Mais Alugados</Text>
        <MiddleCarousel data={response} local='middle'/>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{color:'white', marginLeft: 15}}>Recomendados</Text>
        <MiddleCarousel data={response}/>
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