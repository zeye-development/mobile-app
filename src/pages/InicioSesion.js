import React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import Header from './../components/Header';
import LoginWithSocialMedia from '../components/shared/LoginWithSocialMedia'

import Formulario from '../container/inicioSesion/Formulario';
import Login from '../screens/Login';
import { QuestionsLogin } from '../components/auth/Questions';

export default function InicioSesion({ navigation }) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <View style={style.container}>
            <Header navigation={navigation} title='Iniciar Sesion' btnClose={false} />
            <LoginWithSocialMedia />
            {/* TODO: use component Formulario */}
            {/* <Formulario navigation={navigation} /> */}
            <Login navigation={navigation} />
            <QuestionsLogin navigation={navigation} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#FFF',
    paddingVertical: 30,
  }
});
