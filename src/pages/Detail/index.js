import React, {useContext} from "react";
import { 
  SafeAreaView,
  Text, 
  StyleSheet,
  TouchableOpacity,
  View 
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { AppContext } from "../../Context";

import Feather from 'react-native-vector-icons/Feather'

export default function Detail(){

  const { getDetail  } = useContext(AppContext);

  const navigation =  useNavigation();
  const route = useRoute();

  let name = route?.params.name


  async function getHandleDetail(){
    
    getDetail(name)

  }



  return(
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        >

          <Feather
            name="arrow-left"
            color="#FFF"
            size={30}
          />

        </TouchableOpacity>

        <TouchableOpacity onPress={ () => getHandleDetail()}>
          <Text style={styles.name}>Teste</Text>
        </TouchableOpacity>


      </View>

      <Text style={styles.name}>{name}</Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#050B18'
  },
  buttonBack:{
    position: 'absolute',
    left: '5%',
    top: 20,
    backgroundColor: '#000',
    padding: 4,
    borderRadius: '50%'

  },
  name:{
    color: '#FFF'
  }
})