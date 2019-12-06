import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../container/recuperarPaso1/Header';
import BodyMensaje from '../container/recuperarPaso1/BodyMensaje';
import Formulario from '../container/recuperarPaso1/Formulario';

export default function RecuperarPaso1() {
  return (
    <View style={style.container}>
        <Header />
        <BodyMensaje />
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
