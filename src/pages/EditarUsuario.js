import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../container/editar-usuario/Header";
import FotoPerfil from "../container/editar-usuario/FotoPerfil";
import Formulario from "../container/editar-usuario/Formulario";

export default function EditarUsuario() {
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
