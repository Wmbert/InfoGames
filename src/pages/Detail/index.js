import {useContext, useEffect, useState} from "react";
import { 
  SafeAreaView,
  Text, 
  StyleSheet,
  TouchableOpacity,
  View, 
  FlatList,
  Image,
  Modal,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { AppContext } from "../../Context";

import Feather from 'react-native-vector-icons/Feather'

import ImageDetail from "../../components/ImageDetail";
import GenresList from "../../components/GenresList";
import Description from "../../components/Description";
import Plataforms from "../../components/Plataforms";
import Stores from "../../components/Stores";

export default function Detail(){

  const { 
    getDetail, 
    gameDetail, 
    gameImage, 
    saveFavoriteGame,
  } = useContext(AppContext);

  const navigation =  useNavigation();
  const route = useRoute();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //pega os detalhes do game
    async function getHandleDetail(){
    
      getDetail(route?.params.name)
      
    }

    getHandleDetail();
    
  }, [])
  
  function handleShowModal(){

    setShowModal(!showModal);

  }

  function handleFavorite(){

    saveFavoriteGame(gameDetail)

  }


  return(
    
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity 
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        >

          <Feather
            name="arrow-left"
            color="#FFF"
            size={25}
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFavorite}
          onPress={handleFavorite}
        >

          <Feather
            name="bookmark"
            size={25}
            color="#FFF"
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonHome}
          //zera as pilhas
          onPress={() => navigation.popToTop()}
        >

          <Feather
            name="home"
            size={25}
            color="#FFF"
          />

        </TouchableOpacity>

      </View>

      <FlatList
          data={gameImage}
          renderItem={({item}) => <ImageDetail data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.ImageArea}
      />

      <View style={styles.rating}>

        <Image
          source={require('../../assets/metacritic.png')}
          style={styles.logoM}
        />

        <View style={styles.notaArea}>

          <Text style={styles.nota}>{gameDetail.metacritic}</Text>

        </View>
        
      </View>

      <View>

        <Text style={styles.gameName}>{gameDetail.name}</Text>

        <Text style={styles.genresTitle}>Genres</Text>

        <FlatList
          data={gameDetail.genres}
          renderItem={({item}) => <GenresList data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.genresList}
        />

        <Text style={styles.descTitle} >Description</Text>

        <Text
          numberOfLines={3}
          style={styles.description}
        >

          {gameDetail.description_raw}

        </Text>

        <TouchableOpacity
          style={styles.descBtn}
          onPress={handleShowModal}
        >

          <Text style={styles.descText}>Read full description</Text>

        </TouchableOpacity>

        <Modal visible={showModal} animationType="slide">

          <Description 
            closeModal={handleShowModal} 
            desc={gameDetail.description_raw}
          />

        </Modal>

        <Text style={styles.plataformsTitle}>Plataforms</Text>

        <FlatList
          data={gameDetail.platforms}
          renderItem={({item}) => <Plataforms  data={item}/>}
          horizontal
          showsVerticalScrollIndicator={false}
          style={styles.plataformList}
        />

        <Text style={styles.plataformsTitle}>Stores</Text>

        <FlatList
          data={gameDetail.stores}
          renderItem={({item}) => <Stores  data={item}/>}
          horizontal
          showsVerticalScrollIndicator={false}
          style={styles.plataformList}
        />

      </View>

    </SafeAreaView>
  
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B18'
  },
  buttonBack:{
    position: 'absolute',
    left: '3%',
    top: 20,
    backgroundColor: '#000',
    padding: 8,
    borderRadius: '50%',
    zIndex: 99
  },
  buttonFavorite:{
    position: 'absolute',
    right: '3%',
    top: 20,
    backgroundColor: '#000',
    padding: 8,
    borderRadius: '50%',
    zIndex: 99
  },
  buttonHome:{
    position: 'absolute',
    left: '15%',
    top: 20,
    backgroundColor: '#000',
    padding: 8,
    borderRadius: '50%',
    zIndex: 99
  },
  name:{
    color: '#FFF'
  },
  image:{
    width: 300,
    height: 200
  },
  ImageArea:{
    maxHeight: 200
  },
  rating:{
    flexDirection: 'row',
    marginTop: 15,
  },
  logoM:{
    width: 35,
    height: 35,
    marginLeft: 8
  },
  notaArea:{
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 4,
    marginLeft: 8
  },
  nota:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  gameName:{
    color: '#FFF',
    marginTop: 5,
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  genresTitle:{
    color: '#FFF',
    marginLeft: 8,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  genresList:{
    marginTop: -10,
  },
  descTitle:{
    color: "#FFF",
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  description:{
    color: '#FFF',
    marginLeft: 8

  },
  descBtn:{
    backgroundColor: '#0E5C88',
    width: '95%',
    alignSelf: 'center',
    padding: 3,
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 4
  },
  descText:{
    color: '#FFF',
    fontWeight: 'bold'
  },
  plataformsTitle:{
    color: '#FFF',
    marginTop: 20,
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  plataformList:{
    marginTop: 4,
    marginLeft: 8,
  },
})