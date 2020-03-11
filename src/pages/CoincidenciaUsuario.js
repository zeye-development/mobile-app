import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import Header from "../container/coincidenciaUsuario/Header";
import FotoPerfil from "../container/coincidenciaUsuario/FotoPerfil";
import Formulario from "../container/coincidenciaUsuario/Formulario";

export default function CoincidenciaUsuario(props) {

  let { user } = props.navigation.state.params;

  return (
    <View style={style.container}>
      <ScrollView>
        <Header navigation={props.navigation} />
        <FotoPerfil navigation={props.navigation} user={user} />
        <Formulario navigation={props.navigation} user={user} />
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
