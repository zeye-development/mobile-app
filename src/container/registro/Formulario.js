import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import md5 from "md5";
import { LinearGradient } from "expo-linear-gradient";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: null,
      pass: null,
      pass_v: null,
      modalVisible: false,
      modalVisible2: false,
      mensajeAlert: "",
      modalLoading: false
    };
  }

  async login() {
    console.log(this.state.email);
    console.log(this.state.pass);
    console.log(this.state.pass_v);
    const licence = Math.floor(
      Math.random() *
        1000 *
        Math.floor(
          Math.random() *
            100 *
            Math.floor(Math.random() * 10000000000 * 1458102)
        )
    );
    var licenceS = licence.toString();
    let lic = licenceS.replace(/['"]+/g, "");
    console.log(licenceS);
    try {
      this.setState({ modalLoading: true });
      let response = await fetch("http://189.213.227.211:8443/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mimeType: "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: md5(this.state.pass),
          password_validate: md5(this.state.pass_v),
          names: "Keyberth",
          surnames: "Pe",
          license_key: lic
        })
      });

      let responseJson = await response.json();
      console.log(responseJson);

      if (responseJson.status === 200) {
        this.setState({
          modalLoading: false,
          modalVisible2: !this.state.modalVisible2,
          mensajeAlert: "El Registro se Completo de Manera Exitosa!"
        });
      } else {
        // Alert.alert("Error", "El Correo o la contraseña no son correctos");

        this.setState({
          modalLoading: false,
          modalVisible: !this.state.modalVisible,
          mensajeAlert: "Este correo ya se encuentra registrado"
        });
      }
    } catch (error) {
      // Alert.alert("Error", "Usted no dispone de una conexion a internet");
      this.setState({
        modalLoading: false,
        modalVisible: !this.state.modalVisible,
        mensajeAlert: "Usted no dispone de una conexion a internet"
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
          />
        </View>

        <View style={styles.viewContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.pass}
            onChangeText={pass => this.setState({ pass })}
            style={styles.input}
          />
        </View>

        <View style={styles.viewContainer}>
          <TextInput
            placeholder="Repeat Password"
            secureTextEntry={true}
            value={this.state.pass_v}
            onChangeText={pass_v => this.setState({ pass_v })}
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
              this.login(this.state.email, this.state.pass, this.state.pass_v);
            }}
          >
            <Text style={styles.inputButtom}>
              Registrar{" "}
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
              position: "absolute",
              top: "45%",
              left: "45%"
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
                  onPress={() => {
                    this.props.navigation.replace("InicioSesion");
                  }}
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
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible2}
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
                  this.setState({ modalVisible2: !this.state.modalVisible2 });
                  this.props.navigation.replace("InicioSesion");
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
                  Iniciar Sesion
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
    // alignItems: "center",
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  input: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33,
    borderWidth: 2,
    borderColor: "transparent",
    fontFamily: "PoppinsRegular"
  },
  inputButtom: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
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
  // error: {
  //   borderWidth: 2,
  //   borderColor: "rgb(204, 0, 0)",
  //   borderRadius: 15
  // },
  // igual: {
  //   borderWidth: 2,
  //   borderColor: "#00DFAA",
  //   borderRadius: 15
  // }
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
  }
});
