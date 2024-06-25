import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert} from 'react-native'
import TextField from '../components/TextField';
import { SearchButton } from '../components/SearchButton';
import ComicModel from '../models/ComicsModel';
import { getComicList } from '../services/API';
import AluguelComic from '../models/AluguelModel';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';




const Card = (props: { image: string; title: string, id: number }) => {

  const currentUser = useSelector((state: RootState) => state.currentUser.user)


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
          onPress: async () => {
            const aluguel: AluguelComic = new AluguelComic(currentUser.id, props.id, props.title, props.image, new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0]);

            console.log(aluguel);
            await aluguel.postAluguel();
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
  const [response, setResponse] = useState([]);
  const [dynamicCarouselData, setDynamicCarouselData] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [ value, setValue ] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  
  const [comics, setComics] = useState([]);
  

  const handlePostAluguel = async () => {

  }
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
      
      
  }

  useEffect(() => {
    handleResponse()
    handleSort('asc');
    setSortOrder('desc');
  }, []);

  useEffect(() => {
    setDynamicCarouselData(response);
  }, [response])


  const handleSearch = () => {
    onSubmit(value);
  };
  

  const onSubmit = (titulo: string) => {

    if (titulo === "") {
      const sortedData = [...dynamicCarouselData].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

      setDynamicCarouselData(sortedData );
      setNoResults(false);
      setSortOrder('desc');

    } else {
      const filteredData = dynamicCarouselData.filter((item) => item.title.toLowerCase().includes(titulo.toLowerCase()));
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
            
            <Card key={item.id} image={item.img} title={item.title} id={item.id}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    
    backgroundColor: '#000',
    
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: 25

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