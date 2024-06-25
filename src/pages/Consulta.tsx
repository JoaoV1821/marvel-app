import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import TextField from '../components/TextField';
import { SearchButton } from '../components/SearchButton';
import { getAluguelList } from '../services/API';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers'
import { deleteAluguel } from '../services/API';



const Card = (props: { image: string; title: string; devolucao: string, id:number }) => {

  const handleDelete = async (id) => {
      await deleteAluguel(id).then(() => {
        Alert.alert("Quadrinho devolvido!")
      })
  }
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
          onPress:  async () => {
            await handleDelete(props.id);
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


  function formatDate(dateString: string): string {
    // Converte a string em um objeto Date
    let date = new Date(dateString);
  
    // Verifica se a data é válida
    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }
  
    // Obtém o dia, o mês e o ano da data fornecida
    let day: number | string = date.getDate();
    let month: number | string = date.getMonth() + 1; // Os meses em JavaScript são de 0 a 11
    let year: number = date.getFullYear();
  
    // Adiciona um zero à esquerda se o dia ou o mês tiverem apenas um dígito
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
  
    // Retorna a data no formato dd/mm/yyyy
    return `${day}/${month}/${year}`;
  }
  

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={ renderImage(props.image) } style={{ height: 200, width: 120 }} />
          <Text style={{color: 'white'}}>{props.title}</Text>
          <Text style={{color: 'white'}}>Data de devolução</Text>
          <Text style={{color: 'white'}}>{formatDate(props.devolucao)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Consulta = (): React.JSX.Element => {
  const [dynamicCarouselData, setDynamicCarouselData] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [ value, setValue ] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const currentUser = useSelector((state: RootState) => state.currentUser.user );


  useEffect(() => {
    handleSort('asc');
    handleGetComics();
  }, []);

  

  const handleGetComics = async () => {
     const response =  await getAluguelList(currentUser.id);

     console.log(response)
     setDynamicCarouselData(response);
  }


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
      const sortedData = dynamicCarouselData.sort((a, b) => {
        const dateA = converterParaData(a.aluguelhq_data_devolucao);
        const dateB = converterParaData(b.aluguelhq_data_devolucao);
        return Number(dateA) - Number(dateB);
      });
      setDynamicCarouselData(sortedData);
      setNoResults(false);
      setSortOrder('desc');
    } else {
      const filteredData = dynamicCarouselData.filter((item) => item.hq_titulo.toLowerCase().includes(titulo.toLowerCase()));
      const sortedData = filteredData.sort((a, b) => {
        const dateA = converterParaData(a.aluguelhq_data_devolucao);
        const dateB = converterParaData(b.aluguelhq_data_devolucao);
        return Number(dateA) - Number(dateB);
      });
      setDynamicCarouselData(sortedData);
      setNoResults(sortedData.length === 0);
      setSortOrder('desc');
    }
  };

  const handleSort = (sortOrder: string) => {
    const sortedData = [...dynamicCarouselData].sort((a, b) => {
      const dateA = converterParaData(a.aluguelhq_data_devolucao);
      const dateB = converterParaData(b.aluguelhq_data_devolucao);
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
                  <Card key={item.id} image={item.hq_imagem} title={item.hq_titulo} devolucao={item.aluguelhq_data_devolucao} id={item.aluguelhq_id}/>
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