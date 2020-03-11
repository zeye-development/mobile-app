import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

// import Header from './../components/Header';

import Header from "../container/usuario-requerido/Header";
import FotoPerfil from "../container/usuario-requerido/FotoPerfil";
import Formulario from "../container/usuario-requerido/Formulario";

export default function UsuarioRequerido(props) {

  let { images: imagen, wanted } = props.navigation.state.params.user;

  return (
    <View style={style.container}>
      <ScrollView>
        {/* <Header navigation={props.navigation} title='Perfil Usuario' btnClose={false} /> */}
        <Header navigation={props.navigation} />        
        <FotoPerfil imagen={imagen} wanted={wanted} />
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
