import React, { useState } from 'react';
import { View, Image, FlatList, Dimensions, Text, Alert } from 'react-native';

export const Carousel = (props) => {

  const screenWidth = Dimensions.get('window').width;
 
  const [activeIndex, setActiveIndex] = useState(0);

  

  const renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1}} >
        <Image source={item.image} style={{height: 200, width: screenWidth - 40, marginLeft: 20, marginRight: 20}} />
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
      props.data.map((dot, index) => {
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
      <FlatList data={props.data} renderItem={renderItem} horizontal={true} pagingEnabled={true} onScroll={handleScroll} keyExtractor={(item) => item.id} />
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        {renderDot()}
      </View>
    </View>
  )
}


export const MiddleCarousel = (props) => {
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    const index = scrollPosition / screenWidth;

    setActiveIndex(index);
    
}

const renderMiddle = ({item, index}) => {
  
  return (
    <View style={{flex: 1, alignItems: 'center'}} >
        
         <Image source={{uri: item.img}} style={{height: 200, width: 120, margin: 10}} key={index}/>
         
    </View>
  )
}


const renderBottom = ({item, index}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}} >
         <Image source={{uri: item.img}} style={{height: 200, width: 120, margin: 10}} key={index}/>
         
      
    </View>
  )
}

    return (
      <View>
          <FlatList  data={props.data} renderItem={props.local === 'middle' ? renderMiddle : renderBottom} horizontal={true} pagingEnabled={true} keyExtractor={(item) => item.id} onScroll={handleScroll}/>      
      </View>
    )
}


