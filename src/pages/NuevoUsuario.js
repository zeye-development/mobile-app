import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../container/nuevo-usuario/Header';
import FotoPerfil from '../container/nuevo-usuario/FotoPerfil';
import Formulario from '../container/nuevo-usuario/Formulario';

export default function NuevoUsuario(props) {
  return (
    <View style={style.container}>
        <Header navigation={props.navigation} />
        <FotoPerfil navigation={props.navigation} />
        <Formulario />
    </View>

  );
}
const style = StyleSheet.create({
  container: {
      flex: 6,
      backgroundColor: '#fff',
      padding: 30
  }
});
