import React from 'react';
import { ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import Header from './../components/Header';
import LoginWithSocialMedia from '../components/shared/LoginWithSocialMedia'

import Formulario from '../container/inicioSesion/Formulario';
import Login from '../screens/Login';
import { QuestionsLogin } from '../components/auth/Questions';
import { ContainerScreen } from '../styles/ui';

export default function InicioSesion({ navigation }) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerScreen>
            <Header navigation={navigation} title='Iniciar Sesion' btnClose={false} />
            <LoginWithSocialMedia />
            {/* TODO: use component Formulario */}
            {/* <Formulario navigation={navigation} /> */}
            <Login navigation={navigation} />
            <QuestionsLogin navigation={navigation} />
          </ContainerScreen>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
