import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../container/recuperarPaso2/Header';
import BodyMensaje from '../container/recuperarPaso2/BodyMensaje';
import Formulario from '../container/recuperarPaso2/Formulario';

export default function RecuperarPaso2() {
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
