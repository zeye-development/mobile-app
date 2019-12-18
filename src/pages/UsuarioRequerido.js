import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../container/usuario-requerido/Header";
import FotoPerfil from "../container/usuario-requerido/FotoPerfil";
import Formulario from "../container/usuario-requerido/Formulario";

export default function UsuarioRequerido(props) {
  return (
    <View style={style.container}>
      <ScrollView>
        <Header navigation={props.navigation} />
        <FotoPerfil />
        <Formulario navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
    paddingVertical: 30,
    marginLeft: 5
  }
});
