import {useEffect, useContext, useState} from "react";
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  View,
  TouchableOpacity,
  FlatList
} from "react-native";

import { AppContext } from "../../Context";

import { useNavigation } from '@react-navigation/native'

import Feather from 'react-native-vector-icons/Feather'

import FavoriteList from "../../components/FavoriteList";

export default function Favorites(){

  const navigation = useNavigation();
  const { loadFavoriteGames, favoriteGames, removeAllGame  } = useContext(AppContext);

  useEffect(() => {

   loadFavoriteGames()
    
  }, [favoriteGames])

  function handleRemoveAll(){
    removeAllGame();
  }

  return(

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
              
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            color="#FFF"
            size={40}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.removeAllBtn}
          onPress={handleRemoveAll}
        >

          <Feather
            name="trash"
            size={30}
            color="#FFF"
          />

        </TouchableOpacity>
        
        <Text style={styles.title}>Favorites</Text>
      
      </View>

      <FlatList
        data={favoriteGames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <FavoriteList data={item} />}
        ListEmptyComponent={() => <Text style={styles.noGame}>Nenhum game favoritado</Text>}
      />

    </SafeAreaView>

  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B18'
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginTop: 10,
  },
  title:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  noGame:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  removeAllBtn:{
    position: 'absolute',
    right: '4%'
  }
})