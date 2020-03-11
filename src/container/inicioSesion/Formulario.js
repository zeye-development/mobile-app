import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Modal,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { validatorEmail } from '../../helpers/validatorEmail';
import md5 from 'md5';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: null,
      pass: null,
      modalVisible: false,
      modalLoading: false,
      error: false,
      msjError: ''
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }
    try {
      const token = await Notifications.getExpoPushTokenAsync();
      AsyncStorage.setItem('tokenPush', token);
      console.log(token);
    } catch {}
  }

  async login(email, pass) {
    // email = 'lewis@gmail.com';
    // pass = '123456';
    // email = 'troconisbaltar@gmail.com';
    // pass = '18138899';

    if (!email) {
      this.setState({
        modalVisible: !this.state.modalVisible,
        mensajeAlert: 'El Email es requerido para iniciar Sesion'
      });
      return;
    } else if (email) {
      if (!validatorEmail(email)) {
        this.setState({
          error: true,
          msjError: 'Introduzca un email valido'
        });
        setTimeout(() => {
          this.setState({
            error: false,
            msjError: ''
          });
        }, 2000);
        return;
      }
    }
    if (!pass) {
      this.setState({
        modalVisible: !this.state.modalVisible,
        mensajeAlert: 'La Contraseña es requerida para Iniciar Sesion'
      });
      return;
    }

    email = email.toLowerCase();

    try {
      const tokenPush = await AsyncStorage.getItem('tokenPush ')
      console.info('Form - Login');
      console.log(tokenPush)
      this.setState({ modalLoading: true });
      let response = await fetch('http://189.213.227.211:8443/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          mimeType: 'application/json'
        },
        body: JSON.stringify({
          expoID: 'sasdasdasdas',
          email: email,
          password: md5(pass)
        })
      });

      let responseJson = await response.json();
      console.info('Response - Login');      
      // console.log(responseJson);

      const token = await JSON.stringify(responseJson.token);
      if (responseJson.status === 200) {
        await AsyncStorage.setItem('token', token);
        this.setState({ modalLoading: false });
        this.props.navigation.replace('Loading', { token: token });
      } else {
        this.setState({
          modalLoading: false,
          modalVisible: !this.state.modalVisible,
          mensajeAlert: 'El Usuario o la Contraseña no son correctos'
        });
      }
    } catch (error) {
      this.setState({
        modalLoading: false,
        modalVisible: !this.state.modalVisible,
        mensajeAlert: 'Usted no dispone de una conexion a internet'
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <TextInput
            style={[styles.input, styles.font]}
            placeholder="Correo Electronico"
            value={this.state.email}
            onChangeText={item => {
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
            onChangeText={item => {
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
        <LinearGradient
          colors={['#0097CD', '#01B8E2']}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.styleButtom}
        >
          <TouchableOpacity
            onPress={() => {
              this.login(this.state.email, this.state.pass);
            }}
          >
            <Text style={[styles.inputButtom, styles.font]}>
              Iniciar Sesion{' '}
              <Ionicons name="md-arrow-forward" size={18} color="#fff" />
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* ============================modalLoading======= */}
        <Modal
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
        </Modal>
        
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
              marginHorizontal: '10%'
            }}
          >
            <View style={{ marginHorizontal: 20, marginTop: 33 }}>
              <ModalTitle>
                {this.state.mensajeAlert}
              </ModalTitle>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: !this.state.modalVisible });
                }}
              >
                <TextConfirm>
                  {' '}
                  Entendido                  
                </TextConfirm>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const ModalView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 66, 90, 0.5);
`;

const ModalTitle = styled.Text`
  font-size: 18px;
  color: #00425A;
  text-align: center;
  font-family: 'PoppinsBold';
`;
/* textShadowRadius: 2; */

const TextConfirm = styled.Text`
  font-size: 16px;
  color: #01B8E2;
  text-align: right;
  font-family: 'PoppinsRegular';
  margin: 40px 20px 20px 20px;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    alignItems: 'stretch',
    maxWidth: 450,
    paddingHorizontal: 30
  },
  input: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33,
    borderWidth: 2,
    borderColor: 'transparent'
  },
  inputButtom: {
    fontSize: 16,
    padding: 13,
    color: '#fff',
    textAlign: 'center'
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: '#EBF2F4',
    marginVertical: 5
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'stretch',
    backgroundColor: '#0097CD'
  },
  usuario: {
    padding: 13,
    backgroundColor: 'red',
    textAlign: 'center',
    color: '#fff',
    borderRadius: 15,
    marginTop: 5
  },
  font: {
    fontFamily: 'PoppinsRegular'
  },
  modal: {
    flex: 1,
    marginTop: '90%',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9
  },
  innerContainer: {
    marginTop: '30%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    borderRadius: 15,
    backgroundColor: '#FE6363',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5
  }
});
