import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Favorites(){
  return(
    <SafeAreaView style={styles.constainer}>
      <Text>Tela de Favorites</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})