import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "../container/registro/Header";
import LoginRedes from "../container/registro/LoginRedes";
import Formulario from "../container/registro/Formulario";
import Preguntas from "../container/registro/Preguntas";

export default function Registro(props) {
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
    // marginHorizontal: 30,
    paddingVertical: 30
  }
});
