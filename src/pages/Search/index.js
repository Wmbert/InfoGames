import { useContext } from "react";
import { 
  SafeAreaView, 
  Text, 
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity 
} from "react-native";

import { AppContext } from "../../Context";

import Feather from 'react-native-vector-icons/Feather'

import GamesList from "../../components/GamesList";

import { useNavigation } from '@react-navigation/native'

export default function Search(){

  const navigation = useNavigation();
  const { gameSearch } = useContext(AppContext);

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

        <View style={styles.titleArea}>

          <Text style={styles.title}>Search</Text>

        </View>
        
      </View>
      
      <FlatList
        data={gameSearch}
        key={(item) => item.id.toString()}
        renderItem={({item}) => <GamesList data={item} />}
        ListEmptyComponent={() => <Text style={styles.noGame}>Não encontramos um jogo com esse nome...</Text>}
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
  titleArea:{
    alignItems: 'center',
    justifyContent: 'ce'
  },
  title:{
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'center'
  },
  noGame:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }
})