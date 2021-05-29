import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import Header from './../components/Header';
import Formulario from '../container/captura/Formulario';

export default function Captura({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} title='Captura de rostro' />
        <Formulario navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}