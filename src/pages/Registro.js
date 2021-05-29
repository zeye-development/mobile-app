import React from 'react';
import { ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import Header from './../components/Header';
import LoginWithSocialMedia from '../components/shared/LoginWithSocialMedia'

import Formulario from '../container/registro/Formulario';
import { QuestionsRegister } from '../components/auth/Questions';
import { ContainerScreen } from '../styles/ui';

export default function Registro(props) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <ContainerScreen>
            <Header navigation={props.navigation} title='Registrar' btnClose={false} />
            <LoginWithSocialMedia />
            <Formulario navigation={props.navigation} />
            <QuestionsRegister navigation={props.navigation} />
          </ContainerScreen>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
