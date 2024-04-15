import React from 'react'
import { View , Text, StyleSheet} from 'react-native'


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
    <View>

      <Text style={style.title}>Marvel Store</Text>
      <View style={style.container}>
        
        <Card title={"Titulo"} text={'Texto'}/>

      
        <Card title={"Titulo"} text={'Texto'}/>

        
        <Card title={"Titulo"} text={'Texto'}/>

        
        <Card title={"Titulo"} text={'Texto'}/>
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
    marginTop: 120
}


})

export default Dashboard