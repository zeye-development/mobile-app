import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from './../components/Header';

import Formulario from "../container/buscarcoincidencia/Formulario";

export default function buscarcoincidencia(props) {
  return (
    <View style={style.container}>
      <ScrollView>
        <Header navigation={props.navigation} title='Captura de rostro' />
                
        <Formulario navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff"
  }
});
