import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../container/captura/Header";
import FotoPerfil from "../container/captura/FotoPerfil";
import Formulario from "../container/captura/Formulario";

export default function Captura() {
  return (
    <View style={style.container}>
      <ScrollView>
        <Header />
        <FotoPerfil />
        <Formulario />
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
