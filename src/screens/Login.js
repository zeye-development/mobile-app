import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { validatorEmail } from './../helpers/validatorEmail';
import md5 from 'md5';

import styled from 'styled-components/native';

import ModalLoading from './../components/ModalLoading';
import LinearGradientComponent from './../components/shared/LinearGradient';

import { loginAction } from './../redux/userDuck';

import { TextBtn, Input } from 'app/src/styles/ui';
import { useForm } from '../hooks/useForm';

const Form = ({ navigation }) => {

  const dispatch = useDispatch()

  const [error, setError] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [messageAlert, setMessageAlert] = useState('')
  const [modalLoading, setModalLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const { email, password, onChange } = useForm({ email: 'troconisbaltar@gmail.com', password: '18138899' })

  const onSubmit = () => {
    // validations
    if (!email) {
      setModalVisible(!modalVisible)
      setMessageAlert('El Email es requerido para iniciar Sesion')
      return;
    } else if (email) {
      if (!validatorEmail(email)) {
        setError(true)
        setMessageError('Introduzca un email valido')

        setTimeout(() => {
          setError(false)
          setMessageError('')
        }, 2000);
        return;
      }
    }

    if (!password) {
      setModalVisible(!modalVisible)
      setMessageAlert('La Contraseña es requerida para Iniciar Sesion')
      return;
    }

    dispatch(loginAction({
      email,
      password: md5(password)
    }))
    .then((response) => {
      if(response.status === 200) {
        const { token } = response.data;
        AsyncStorage.setItem('token', token);
        navigation.replace('Loading', { token });
      } else {
        setModalLoading(false)
        setModalVisible(!modalVisible)
        setMessageAlert('El Usuario o la Contraseña no son correctos')
      }
    })
    .catch((error) => console.log(error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Input
          placeholder="Correo Electronico"
          value={email}
          onChangeText={ (value) => onChange( value, 'email' ) }
          autoCorrect={ false }
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.viewContainer}>
        <Input
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={ (value) => onChange( value, 'password' ) }
        />
      </View>
      {error ? (
        <View style={styles.error}>
          <Text style={[styles.font, { color: '#fff' }]}>
            { messageError }
          </Text>
        </View>
      ) : null}

      <LinearGradientComponent
        styles={styles.styleButtom}
      >
        <TouchableOpacity
          onPress={onSubmit}
        >
          <TextBtn>
            Iniciar Sesion{' '}
            <Ionicons name="md-arrow-forward" size={18} color="#fff" />
          </TextBtn>
        </TouchableOpacity>
      </LinearGradientComponent>

 
      <ModalLoading modalLoading={modalLoading} />

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
      >
        <ModalView />

        <View
          style={{
            width: 290,
            backgroundColor: '#fff',
            borderRadius: 15,
            position: 'absolute',
            marginTop: '45%',
            marginHorizontal: '10%',
          }}
        >
          <View style={{ marginHorizontal: 20, marginTop: 33 }}>
            <ModalTitle>{messageAlert}</ModalTitle>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
            >
              <TextConfirm>Entendido</TextConfirm>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Form

const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 66, 90, 0.5);
`;

const ModalTitle = styled.Text`
  font-size: 18px;
  color: #00425a;
  text-align: center;
  font-family: "PoppinsBold";
`;

const TextConfirm = styled.Text`
  font-size: 16px;
  color: #01b8e2;
  text-align: right;
  font-family: "PoppinsRegular";
  margin: 40px 20px 20px 20px;
`;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'stretch',
    maxWidth: 450,
    paddingHorizontal: 30,
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: '#EBF2F4',
    marginVertical: 5,
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'stretch',
    backgroundColor: '#0097CD',
  },
  font: {
    fontFamily: 'PoppinsRegular',
  },
  modal: {
    flex: 1,
    marginTop: '90%',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  error: {
    borderRadius: 15,
    backgroundColor: '#FE6363',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
});
