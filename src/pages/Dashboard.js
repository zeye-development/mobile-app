import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../container/dashboard/Header';
import ProgreseBar from '../container/dashboard/ProgreseBar';
import Opciones from '../container/dashboard/Opciones';
import Perfiles from '../container/dashboard/Perfiles';

export default function Dashboard(props) {
  return (
    <View>
      <View style={styles.containerSuperior}>
          <Header navigation={props.navigation}/>
          <ProgreseBar navigation={props.navigation}/>
          <Opciones />
      </View>
      <View>
          <Perfiles />
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  containerSuperior: {
    backgroundColor: '#0097CD',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
});