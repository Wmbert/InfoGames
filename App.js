//app.js
import React from "react";
import {StatusBar} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import AppProvider from "./src/Context";

export default function App(){
  return(
    <NavigationContainer>

      <AppProvider>

        <StatusBar
          backgroundColor="#050B18"
          barStyle='light-content'
          translucent={false}
        />

        <Routes/>

      </AppProvider>

    </NavigationContainer>
  )
}
