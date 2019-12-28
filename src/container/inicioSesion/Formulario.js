import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  Modal,
  Button,
  Image,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { validatorEmail } from "../../helpers/validatorEmail";
import md5 from "md5";
import { LinearGradient } from "expo-linear-gradient";
import * as LocalAuthentication from 'expo-local-authentication';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: null,
      pass: null,
      modalVisible: false,
      mensajeAlert: "",
      authenticated: false,
      modalVisible3: true,
      modalVisible2: true,
      failedCount: 0,
    };
  }

  async login() {
    if (!this.state.email) {
      // Alert.alert("Error", "El correo es Requerido para iniciar Sesion");
      this.setState({
        modalVisible: !this.state.modalVisible,
        mensajeAlert: "El correo es Requerido para iniciar Sesion"
      });
      return;
    }
    if (!this.state.pass) {
      // Alert.alert("Error", "La contraseña es requerida para iniciar Sesion");
      this.setState({
        modalVisible: !this.state.modalVisible,
        mensajeAlert: "El contraseña es Requerido para iniciar Sesion"
      });
      return;
    }
    console.log(this.state.email);
    console.log(this.state.pass);

    try {
      let response = await fetch("http://189.213.227.211:8080/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mimeType: "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: md5(this.state.pass)
        })
      });

      let responseJson = await response.json();
      console.log(responseJson);

      const token = await JSON.stringify(responseJson.token);
      if (responseJson.status === 200) {
        await AsyncStorage.setItem("token", token);

        this.props.navigation.replace("Loading");
      } else {
        // Alert.alert("Error", "El Correo o la contraseña no son correctos");
        this.setState({
          modalVisible: !this.state.modalVisible,
          mensajeAlert: "El Correo o la contraseña no son correctos"
        });
      }
    } catch (error) {
      // Alert.alert("Error", "Usted no dispone de una conexion a internet");
      this.setState({
        modalVisible: !this.state.modalVisible,
        mensajeAlert: "Usted no dispone de una conexion a internet"
      });
    }
  }
  scanFingerPrint = async () => {
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if (results.success) {
        
        this.setState({
          modalVisible2: !this.state.modalVisible2,
         
          failedCotunt: 0,
          
        });this.props.navigation.navigate("Dashboard")
      } else {
        this.setState({
          failedCount: this.state.failedCount + 1,
          
        });
        console.log(this.state.failedCount)}
    } catch (e) {
      console.log(e);
    }
    
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <TextInput
            style={[styles.input, styles.font]}
            placeholder="User"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={styles.viewContainer}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.pass}
            onChangeText={pass => this.setState({ pass })}
            style={styles.input}
          />
        </View>

        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
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
              Iniciar Sesion{" "}
              <Ionicons name="md-arrow-forward" size={18} color="#fff" />
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible2}
          onShow={this.scanFingerPrint}>
          <View style={styles.modal}>
            <View style={styles.innerContainer}>
              <Text style={{fontSize:15, fontFamily:"PoppinsRegular",margin:10}}>Iniciar Sesion con Huella</Text>
              <Ionicons name="md-finger-print" size={40} color="#0097CD"></Ionicons>
              {this.state.failedCount > 0 && (
                <Text style={{ color: 'red', fontSize: 14 }}>
                  Fallo la Autenticacion, intente nuevamente.
                </Text>
              )}
              <TouchableHighlight
                onPress={async () => {
                
                  this.setState({modalVisible2:!this.state.modalVisible2});
                }}>
                <Text style={{ color: 'red', fontSize: 16, marginTop:10 }}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 66, 90, 0.5)"
              // opacity: 0.9
            }}
          ></View>

          <View
            style={{
              width: 290,
              backgroundColor: "#fff",
              borderRadius: 15,
              position: "absolute",
              marginTop: "45%",
              marginHorizontal: "10%"
            }}
          >
            <View style={{ marginHorizontal: 20, marginTop: 33 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#00425A",
                  textAlign: "center",
                  textShadowRadius: 2,
                  fontFamily: "PoppinsBold"
                }}
              >
                {this.state.mensajeAlert}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: !this.state.modalVisible });
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    // padding: 13,
                    color: "#01B8E2",
                    textAlign: "right",
                    fontFamily: "PoppinsRegular",
                    marginTop: 40,
                    marginHorizontal: 20,
                    marginBottom: 20
                  }}
                >
                  {" "}
                  Entendido
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    marginBottom: 20,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  input: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33,
    borderWidth: 2,
    borderColor: "transparent"
  },
  inputButtom: {
    fontSize: 16,
    padding: 13,
    color: "#fff",
    textAlign: "center"
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "stretch",
    backgroundColor: "#0097CD"
  },
  usuario: {
    padding: 13,
    backgroundColor: "red",
    textAlign: "center",
    color: "#fff",
    borderRadius: 15,
    marginTop: 5
  },
  font: {
    fontFamily: "PoppinsRegular"
  },
  modal: {
    flex: 1,
    marginTop: '90%',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.9
  },
  innerContainer: {
    marginTop: '30%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
