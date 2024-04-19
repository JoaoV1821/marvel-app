import React, { useState } from 'react';
import { View, Image, FlatList, Dimensions } from 'react-native';

const Carousel = () => {

  const screenWidth = Dimensions.get('window').width;
 
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselData = [
    {
      id: '01',
      image: require('../../assets/comic.jpg')
    },

    {
      id: '02',
      image: require('../../assets/comic.jpg')
    },

    {
      id: '03',
      image: require('../../assets/comic.jpg')
    }
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1}} key={index}>
        <Image source={item.image} style={{height: 200, width: screenWidth - 40, margin: 20}} />
      </View>
    )
  }

  const handleScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.x
      const index = scrollPosition / screenWidth;
  
      setActiveIndex(index);
      
  }


  const renderDot = () => {
    return (
      carouselData.map((dot, index) => {
        if (activeIndex === index) {
          return <View style={{backgroundColor: 'red', height: 10, width: 10, borderRadius: 5, marginHorizontal: 6}}></View>
        }  else {
          return <View style={{backgroundColor: 'grey', height: 10, width: 10, borderRadius: 5, marginHorizontal: 6}}></View>
        }
        
    })
    )
    
  }

  return (
    <View>
      <FlatList data={carouselData} renderItem={renderItem} horizontal={true} pagingEnabled={true} onScroll={handleScroll} keyExtractor={(item) => item.id} />
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 40}}>
        {renderDot()}
      </View>
    </View>
  )
}


export default Carousel
