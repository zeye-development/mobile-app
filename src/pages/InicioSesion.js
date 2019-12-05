import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../inicioSesion/Header';
import LoginRedes from '../inicioSesion/LoginRedes';
import Formulario from '../inicioSesion/Formulario';
import Preguntas from '../inicioSesion/Preguntas';

export default function InicioSesion() {
  return (
    <View style={style.container}>
        <Header />
        <LoginRedes />
        <Formulario />
        <Preguntas />
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
