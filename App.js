import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Principal from './src/pages/Principal';
import InicioSesion from "./src/pages/InicioSesion";

export default function App() {
  return (
    <View style={styles.container}>
      <InicioSesion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff'
  },
});
