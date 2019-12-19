import React from "react";
import { StyleSheet, View, ScrollView,KeyboardAvoidingView,SafeAreaView } from "react-native";

import Header from "../container/inicioSesion/Header";
import LoginRedes from "../container/inicioSesion/LoginRedes";
import Formulario from "../container/inicioSesion/Formulario";
import Preguntas from "../container/inicioSesion/Preguntas";

export default function InicioSesion(props) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView  behavior="position" enabled>
        <ScrollView>
          <View style={style.container}>
            <Header navigation={props.navigation} />
            <LoginRedes />
            <Formulario navigation={props.navigation} />
            <Preguntas navigation={props.navigation} />
          </View>
         </ScrollView>   
      </KeyboardAvoidingView>
  </SafeAreaView>
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
