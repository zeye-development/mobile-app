import React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import Header from './../components/Header';

import LoginRedes from '../container/registro/LoginRedes';
import Formulario from '../container/registro/Formulario';
import Preguntas from '../container/registro/Preguntas';

export default function Registro(props) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <View style={style.container}>
            <Header navigation={props.navigation} title='Registrar' btnClose={false} />
 
            <LoginRedes />
            <Formulario navigation={props.navigation} />
            <Preguntas navigation={props.navigation} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    paddingVertical: 30,
    marginLeft: 5
  }
});
