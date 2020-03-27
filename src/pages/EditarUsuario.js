import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from './../components/Header';

import FotoPerfil from "../container/editar-usuario/FotoPerfil";
import Formulario from "../container/editar-usuario/Formulario";

export default function EditarUsuario(props) {
  let { user } = props.navigation.state.params;

  return (
    <View style={style.container}>
      <ScrollView>
        <Header navigation={props.navigation} title='Editar Usuario' btnClose={false} />        
        <FotoPerfil navigation={props.navigation} imagen={user.images} />
        <Formulario navigation={props.navigation} user={user}/>
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
