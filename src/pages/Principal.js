import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Inicio from '../container/principal/Inicio';
import Login from '../container/principal/Login';
export default function Principal() {
  return (
    <View style={style.container}>
      <Inicio />
      <Login />
    </View>

  );
}
const style = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#0097CD' ,
      padding: 30
  }
});
