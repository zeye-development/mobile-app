import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './../components/Header';
import Formulario from '../container/captura/Formulario';

export default function Captura(props) {
  return (
    <View>
      <ScrollView>
        <Header navigation={props.navigation} title='Captura de rostro' />
        <Formulario navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}