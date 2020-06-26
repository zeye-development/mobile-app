import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { validatorEmail } from '../../helpers/validatorEmail';
import md5 from 'md5';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import styled from 'styled-components/native';
const io = require('socket.io-client');

import ModalLoading from './../../components/ModalLoading';
import LinearGradientComponent from './../../components/shared/LinearGradient';

import { loginAction } from './../../redux/userDuck';
import * as Config from '../../../config';

import { TextBtn } from 'app/src/styles/ui';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: null,
      pass: null,
      modalVisible: false,
      modalLoading: false,
      error: false,
      msjError: '',
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return
    }
    try {
      const token = await Notifications.getExpoPushTokenAsync();
      AsyncStorage.setItem('tokenPush', token);
      console.log('Set Token: ', token);
    } catch {}
  }

  async login(email, pass) {
    // if (!email) {
    //   this.setState({
    //     modalVisible: !this.state.modalVisible,
    //     mensajeAlert: "El Email es requerido para iniciar Sesion",
    //   });
    //   return;
    // } else if (email) {
    //   if (!validatorEmail(email)) {
    //     this.setState({
    //       error: true,
    //       msjError: "Introduzca un email valido",
    //     });
    //     setTimeout(() => {
    //       this.setState({
    //         error: false,
    //         msjError: "",
    //       });
    //     }, 2000);
    //     return;
    //   }
    // }

    // if (!pass) {
    //   this.setState({
    //     modalVisible: !this.state.modalVisible,
    //     mensajeAlert: "La Contraseña es requerida para Iniciar Sesion",
    //   });
    //   return;
    // }
    this.handleSubmit();
    // email = email.toLowerCase();
  }

  handleSubmit = async () => {
    const tokenPush = await AsyncStorage.getItem('tokenPush');
    console.log('Toke: ', tokenPush)
    // email: this.state.email,
    // password: md5(this.state.pass),
    // email: 'lewistest@gmail.com',
    // password: md5('123456'),
    try {
      this.props
        .loginAction({
          email: this.state.email,
          password: md5(this.state.pass),
          // email: 'lewistest@gmail.com',
          // password: md5('123456'),
          // email: 'adriancito@gmail.com',
          // password: md5('18138899'),
          expoID: tokenPush,
        })
        .then((response) => {
          // console.log('Response ', response)
          if (response.status === 200) {
            // console.log('Response ', response)
            let { token } = response.data;
            AsyncStorage.setItem('token', token);
            this.props.navigation.replace('Loading', { token });
          } else {
            this.setState({
              modalLoading: false,
              modalVisible: !this.state.modalVisible,
              mensajeAlert: 'El Usuario o la Contraseña no son correctos',
            });
          }
        })
        .catch((error) => console.log(error));
    } catch {
      this.setState({
        modalLoading: false,
        modalVisible: !this.state.modalVisible,
        mensajeAlert: 'Usted no dispone de una conexion a internet',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <TextInput
            style={[styles.input, styles.font]}
            placeholder="Correo Electronico"
            value={this.state.email}
            onChangeText={(item) => {
              const email = item.trim();
              this.setState({ email });
            }}
          />
        </View>
        <View style={styles.viewContainer}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.pass}
            onChangeText={(item) => {
              const pass = item.trim();
              this.setState({ pass });
            }}
            style={styles.input}
          />
        </View>
        {this.state.error ? (
          <View style={styles.error}>
            <Text style={[styles.font, { color: '#fff' }]}>
              {this.state.msjError}
            </Text>
          </View>
        ) : null}

        <LinearGradientComponent
          styles={styles.styleButtom}
        >
          <TouchableOpacity
            onPress={() => this.login(this.state.email, this.state.pass)}
          >
            <TextBtn>
              Iniciar Sesion{' '}
              <Ionicons name="md-arrow-forward" size={18} color="#fff" />
            </TextBtn>
          </TouchableOpacity>
        </LinearGradientComponent>

        {/* ============================modalLoading======= */}
        {/* <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalLoading}
        >
          <ModalView />

          <View
            style={{
              position: 'absolute',
              top: '45%',
              left: '45%'
            }}
          >
            {this.state.modalLoading ? (
              <ActivityIndicator size={30} color="#fff" />
            ) : null}
          </View>
        </Modal> */}

        <ModalLoading modalLoading={this.state.modalLoading} />

        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}
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
              <ModalTitle>{this.state.mensajeAlert}</ModalTitle>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: !this.state.modalVisible });
                }}
              >
                <TextConfirm>Entendido</TextConfirm>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { loginAction })(Formulario);

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
  input: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  inputButtom: {
    fontSize: 16,
    padding: 13,
    color: '#fff',
    textAlign: 'center',
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
