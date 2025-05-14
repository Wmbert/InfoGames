import {useEffect, useState, useContext} from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  FlatList,
  ActivityIndicator, 
} from "react-native";

import { AppContext } from "../../Context";

import Header from "../../components/Header";
import SearchComponent from "../../components/SearchComponent";
import GenresList from "../../components/GenresList";
import GamesList from "../../components/GamesList";


export default function Home(){

  const { genres, loading, games } = useContext(AppContext);

  if(loading){
    return(

      <View style={styles.loadingScreen}>

        <ActivityIndicator
          size={50}
          color="#FF455F"
        />

      </View>

    )

  }

  return(

    <View style={styles.container}>

      <Header/>

      <SearchComponent/>

      <FlatList
        data={genres}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <GenresList data={item}/> }
        horizontal={true}
        style={styles.genresList}
      />
      
      <Text style={styles.title}>Best games</Text>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <GamesList data={item}/> }
        style={styles.gamesList}
      />
      
    </View>

  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B18'
  },
  genresList:{
    minHeight: 60,
  },  
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 10,
    marginLeft: 8,
  },
  loadingScreen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050B18'
  },
})