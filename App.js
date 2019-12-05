import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Principal from './src/pages/Principal';
import InicioSesion from "./src/pages/InicioSesion";
import Registro from './src/pages/Registro';
import NuevoUsuario from './src/pages/NuevoUsuario';
import EditarUsuario from './src/pages/EditarUsuario';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Principal / > */}
      {/* <InicioSesion />  */}
      {/* <Registro /> */}
      {/* <NuevoUsuario />  */}
      <EditarUsuario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff'
  },
});
