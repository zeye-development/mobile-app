import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../container/registro/Header';
import LoginRedes from '../container/registro/LoginRedes';
import Formulario from '../container/registro/Formulario';
import Preguntas from '../container/registro/Preguntas';

export default function Registro() {
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
