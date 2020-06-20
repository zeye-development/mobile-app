import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from './../components/Header';

import Camera from '../container/galeria/Camera';
import Imagenes from '../container/galeria/Imagenes';

export default function Galeria(props) {
  const { user } = useSelector(state => state.user);
  // console.log('Data User From Gallery: ', user);

  let { id, images } = props.navigation.state.params;
  console.log('Data User From Gallery: ', props.navigation.state.params);
  return (
    <View style={style.container}>
      <ScrollView>
        <Header navigation={props.navigation} title='Galeria' />
        <Camera navigation={props.navigation} id={ id } images={images} />
        <Imagenes navigation={props.navigation} images={images} />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff'
  }
});
