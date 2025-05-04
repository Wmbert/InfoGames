import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Search(){
  return(
    <SafeAreaView style={styles.constainer}>
      <Text>Tela de Search</Text>
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