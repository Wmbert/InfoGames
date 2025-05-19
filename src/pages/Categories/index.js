import {useEffect, useState, useContext} from "react";
import { 
  SafeAreaView,
  Text, 
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

import Feather from 'react-native-vector-icons/Feather'

import api from "../../services";

import GamesList from "../../components/GamesList";

export default function Categories(){
  const navigation = useNavigation();
  const route = useRoute();

  const [games, setGames] =  useState([]);
  const [loading, setLoading] = useState(true)

  let data = route?.params.data

  useEffect(() => {
    
    async function loadGames(){

      const response = await api.get(`/games?page_size=40&key=b573bcd4439a49eda31b9f10279935d1&genres=${data.id}`)

      setGames(response.data.results)
      setLoading(false)

    }

    loadGames();

  }, [])

  return(
    
    <SafeAreaView style={styles.constainer}>

      <View style={styles.header}>
        
        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Feather
            name="arrow-left"
            color="#FFF"
            size={40}
          />

        </TouchableOpacity>
        
        <Text style={styles.title}>{data.name}</Text>

      </View>

      {loading ? (

        <View style={styles.loadingScreen}>

          <ActivityIndicator
            size={50}
            color='#FF455F'
          />

        </View>

      ): (

        <FlatList
          data={games}
          keyExtractor={(item) => item.id.toString()}
          renderItem={ ({item}) => <GamesList data={item} /> }
        />

      )}

    </SafeAreaView>
    
  )
  
}

const styles = StyleSheet.create({
  constainer: {
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
  loadingScreen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})