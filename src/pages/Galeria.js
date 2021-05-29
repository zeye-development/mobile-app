import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';

import Header from './../components/Header';
import Camera from '../container/galeria/Camera';
import Imagenes from '../container/galeria/Imagenes';

export default function Gallery({ navigation }) {
  let { id, images } = navigation.state.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} title='Galeria' />
        <Camera navigation={navigation} id={ id } images={images} />
        <Imagenes navigation={navigation} images={images} />
      </ScrollView>
    </SafeAreaView>
  );
}
