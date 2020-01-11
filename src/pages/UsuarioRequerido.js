import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../container/usuario-requerido/Header";
import FotoPerfil from "../container/usuario-requerido/FotoPerfil";
import Formulario from "../container/usuario-requerido/Formulario";

export default function UsuarioRequerido(props) {
  // const text = props.navigation.getParams('user',{});
  console.log('required')
  console.log(props.navigation.state.params.user)
  

  return (
    <View style={style.container}>
      <ScrollView>
        <Header navigation={props.navigation} />
        <FotoPerfil imagen={props.navigation.state.params.user.images} />
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
