import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../container/inicioSesion/Header";
import LoginRedes from "../container/inicioSesion/LoginRedes";
import Formulario from "../container/inicioSesion/Formulario";
import Preguntas from "../container/inicioSesion/Preguntas";

export default function InicioSesion(props) {
  return (
    <View style={style.container}>
      <ScrollView>
        <Header navigation={props.navigation} />
        <LoginRedes />
        <Formulario navigation={props.navigation} />
        <Preguntas navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
    paddingVertical: 30
  }
});
