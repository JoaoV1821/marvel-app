import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert} from 'react-native'
import TextField from '../components/TextField';
import { SearchButton } from '../components/SearchButton';

const carouselData = [
  {
    id: '01',
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb4ecb6aa5a9.jpg',
    title: 'Titulo 100'
  },

  {
    id: '02',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7.jpg',
    title: 'Titulo 3'
  },

  {
    id: '03',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg',
    title: 'Titulo 1'
  },

  {
    id: '04',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    title: 'Titulo 8'
  },

  {
    id: '05',
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb4ecb6aa5a9.jpg',
    title: 'Titulo 1'
  },

  {
    id: '06',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7.jpg',
    title: 'Titulo 0'
  },

  {
    id: '07',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg',
    title: 'Titulo 77'
  },

  {
    id: '08',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    title: 'Titulo 88'
  },

];

const Card = (props: { image: string; title: string }) => {
  const handlePress = () => {
    Alert.alert(
      'Alugar Quadrinho',
      `Deseja alugar o quadrinho "${props.title}"?`,
      [
        {
          text: 'não',
          style: 'cancel',
        },
        {
          text: 'sim',
          onPress: () => {
            console.log(`Quadrinho "${props.title}" alugado`);
          },
        },
      ]
    );
  };

  const renderImage = (image: string) => {
    if (image.includes("image_not_available")) {
      return require('../images/escudo.png');
    } else {
      return { uri: image };
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <View>
          <Image source={ renderImage(props.image) } style={{ height: 100, width: 70, }} />
        </View>
        
        <View style={styles.containerTitleQuadrinho}>
          <Text>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Aluguel = (): React.JSX.Element => {
  const [dynamicCarouselData, setDynamicCarouselData] = useState(carouselData);
  const [noResults, setNoResults] = useState(false);
  const [ value, setValue ] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    handleSort('asc');
    setSortOrder('desc');
  }, []);

  const handleSearch = () => {
    onSubmit(value);
  };

  const onSubmit = (titulo: string) => {
    if (titulo === "") {
      const sortedData = [...carouselData].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setDynamicCarouselData(sortedData);
      setNoResults(false);
      setSortOrder('desc');
    } else {
      const filteredData = carouselData.filter((item) => item.title.toLowerCase().includes(titulo.toLowerCase()));
      const sortedData = [...filteredData].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setDynamicCarouselData(sortedData);
      setNoResults(sortedData.length === 0);
      setSortOrder('desc');
    }
  };

  const handleSort = (sortOrder: string) => {
    const sortedData = [...dynamicCarouselData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setDynamicCarouselData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <View style={styles.body}>
      <View style={styles.searchContainer}>
        <View style={styles.textFieldContainer}>
          <TextField style={styles.textField} label={''} placeholder={'Pesquise por quadrinhos'} onChangeText={(text: string) => setValue(text)} error={undefined} placeholderTextColor={'white'}/>
        </View>
        <View style={styles.appButtonContainer}>
          <SearchButton iconName="search" onPress={handleSearch}/>
        </View>
      </View>
      <View style={styles.orderContainer}>
        <TouchableOpacity onPress={()=> handleSort(sortOrder)}>
          <Text style={{ color: '#D6000A', fontSize: 18 }}>{`Ordenar: ${sortOrder === 'asc' ? 'Z-A' : 'A-Z'}`}</Text>
        </TouchableOpacity>
      </View>
      {noResults && <Text style={styles.textEmpty}>Nenhum resultado encontrado.</Text>}
      <ScrollView scrollIndicatorInsets={{ right: 1 }} indicatorStyle="black">
        <View style={styles.listView}>
          {dynamicCarouselData.map((item, index) => (
            <Card key={item.id} image={item.image} title={item.title}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#000',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },

  orderContainer: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#414141',
  },

  textFieldContainer: {
    flex: 1,
  },

  textField: {
    backgroundColor: '#414141',
    opacity: 1.0,
    color:'white' ,  
    borderRadius: 20,
    width: 330,
    height: 40,
    paddingLeft: 20,
  },

  appButtonContainer: {
    flex: 0.5,
    alignItems: 'flex-end',

  },

  textEmpty: {
    color: '#D6000A',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 70,
  },

  listView: {
    flex: 1,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  card : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
    height: 120,
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
    padding: 10,
    marginTop: 10
  },

  containerTitleQuadrinho : {
    height: 80,
    width: 242,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#8e8e8f',
  }

});

export default Aluguel