import React from 'react'
import { View , Text, StyleSheet, ScrollView} from 'react-native'


const comics = [
  {
    'title': 'Spider-Man',
    'text':'1'
  
  },

  {
    'title': 'Iron Man',
    'text':'2'
  },

  {
    'title': 'The Amazing Spider-Man',
    'text':'3'
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
    <View style={style.body}>

      <Text style={style.title}>Marvel Store</Text>

      <Text style={{color: 'white'}}>Recomendações</Text>
      <View style={style.container}>

      <ScrollView
          horizontal={true}
          contentContainerStyle={{ width: `${100 * 5}%` }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          {comics.map((comic) => {
              return (
                <Card title={comic.title} text={comic.text}/>
              )
          })}
      </ScrollView>
        
        
      </View>
    </View>
    
  )
}

const style = StyleSheet.create({

  title: {
    color: "#094275",
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
    width: 209,
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