import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import TextField from '../components/TextField';
import { SearchButton } from '../components/SearchButton';

const carouselData = [
  {
    id: '01',
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb4ecb6aa5a9.jpg',
    title: 'Titulo 1',
    devolucao: '23/09/2024'
  },

  {
    id: '02',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7.jpg',
    title: 'Titulo 2',
    data: '23/04/2023',
    devolucao: '17/05/2024'
  },

  {
    id: '03',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg',
    title: 'Titulo 3',
    devolucao: '28/05/2024'
  },

  {
    id: '04',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    title: 'Titulo 4',
    devolucao: '08/06/2024'
  },

  {
    id: '05',
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bb4ecb6aa5a9.jpg',
    title: 'Titulo 5',
    devolucao: '23/04/2060'
  },

  {
    id: '06',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7.jpg',
    title: 'Titulo 6',
    data: '23/04/2023',
    devolucao: '17/05/2088'
  },

  {
    id: '07',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7.jpg',
    title: 'Titulo 7',
    devolucao: '28/05/2050'
  },

  {
    id: '08',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
    title: 'Titulo 8',
    devolucao: '08/06/2090'
  },

];

const Card = (props: { image: string; title: string; devolucao: string }) => {
  const handlePress = () => {
    Alert.alert(
      'Devolver Quadrinho',
      `Deseja devolver o quadrinho "${props.title}"?`,
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
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={ renderImage(props.image) } style={{ height: 200, width: 120 }} />
          <Text style={{color: 'white'}}>{props.title}</Text>
          <Text style={{color: 'white'}}>Data de devolução</Text>
          <Text style={{color: 'white'}}>{props.devolucao}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Consulta = (): React.JSX.Element => {
  const [dynamicCarouselData, setDynamicCarouselData] = useState(carouselData);
  const [noResults, setNoResults] = useState(false);
  const [ value, setValue ] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    handleSort('asc');
  }, []);

  const handleSearch = () => {
    onSubmit(value);
    setSortOrder('desc');
  };

  const converterParaData = (dataString) => {
    const partes = dataString.split("/");
    return new Date(partes[2], partes[1] - 1, partes[0]);
  };

  const onSubmit = (titulo: string) => {
    if (titulo === "") {
      const sortedData = carouselData.sort((a, b) => {
        const dateA = converterParaData(a.devolucao);
        const dateB = converterParaData(b.devolucao);
        return Number(dateA) - Number(dateB);
      });
      setDynamicCarouselData(sortedData);
      setNoResults(false);
      setSortOrder('desc');
    } else {
      const filteredData = carouselData.filter((item) => item.title.toLowerCase().includes(titulo.toLowerCase()));
      const sortedData = filteredData.sort((a, b) => {
        const dateA = converterParaData(a.devolucao);
        const dateB = converterParaData(b.devolucao);
        return Number(dateA) - Number(dateB);
      });
      setDynamicCarouselData(sortedData);
      setNoResults(sortedData.length === 0);
      setSortOrder('desc');
    }
  };

  const handleSort = (sortOrder: string) => {
    const sortedData = [...dynamicCarouselData].sort((a, b) => {
      const dateA = converterParaData(a.devolucao);
      const dateB = converterParaData(b.devolucao);
      if (sortOrder === 'asc') {
        return Number(dateA) - Number(dateB);
      } else {
        return Number(dateB) - Number(dateA);
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
          <Text style={{ color: '#D6000A', fontSize: 18 }}>{`Ordenar: ${sortOrder === 'asc' ? 'Maior prazo' : 'Menor prazo'}`}</Text>
        </TouchableOpacity>
      </View>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {dynamicCarouselData.length !== 0 ? (dynamicCarouselData.map((item, index) => (
                <View key={item.id} style={{ width: '50%', padding: 5 }}>
                  <Card image={item.image} title={item.title} devolucao={item.devolucao} />
                </View>
              ))
            ) : (
              <Text style={styles.textEmpty}>Nenhum resultado encontrado.</Text>
            )}
          </View>
        </ScrollView>
    </View>
  )
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
    marginTop: 70,
    textAlign: 'center',
    width: '100%',
  },

  card : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 280,
    width: 200,
  },

});

export default Consulta