import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './../components/Header';
import Camera from '../container/galeria/Camera';
import Imagenes from '../container/galeria/Imagenes';

export default function Galeria(props) {
  let { id, images } = props.navigation.state.params;

  return (
    <View>
      <ScrollView>
        <Header navigation={props.navigation} title='Galeria' />
        <Camera navigation={props.navigation} id={ id } images={images} />
        <Imagenes navigation={props.navigation} images={images} />
      </ScrollView>
    </View>
  );
}
