import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Modal,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { validatorEmail } from "../../helpers/validatorEmail";
import md5 from "md5";
import { LinearGradient } from "expo-linear-gradient";


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
      msjError: ""
    };
  }

  async login(email, pass) {
    // email = 'lewis@gmail.com'
    // pass = '123456'

    if (!email) {
      // Alert.alert("Error", "El correo es Requerido para iniciar Sesion");
      this.setState({
        modalVisible: !this.state.modalVisible,
        mensajeAlert: "Email is required for login"
      });
      return;
    } else if (email) {
      if (!validatorEmail(email)) {
        this.setState({
          error: true,
          msjError: "Please enter a valid email address"
        });
        setTimeout(() => {
          this.setState({
            error: false,
            msjError: ""
          });
        }, 2000);
        return;
      }
    }
    if (!pass) {
      // Alert.alert("Error", "La contraseña es requerida para iniciar Sesion");
      this.setState({
        modalVisible: !this.state.modalVisible,
        mensajeAlert: "Password is required for login"
      });
      return;
    }

    email = email.toLowerCase();

    try {
      this.setState({ modalLoading: true });
      let response = await fetch("http://189.213.227.211:8443/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mimeType: "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: md5(pass)
        })
      });

      let responseJson = await response.json();
      console.log(responseJson);

      const token = await JSON.stringify(responseJson.token);
      if (responseJson.status === 200) {
        await AsyncStorage.setItem("token", token);
        this.setState({ modalLoading: false });
        this.props.navigation.replace("Loading", { token: token });
      } else {
        // Alert.alert("Error", "El Correo o la contraseña no son correctos");
        this.setState({
          modalLoading: false,
          modalVisible: !this.state.modalVisible,
          mensajeAlert: "Invalid credentials, please check it and make login again"
        });
      }
    } catch (error) {
      // Alert.alert("Error", "Usted no dispone de una conexion a internet");
      this.setState({
        modalLoading: false,
        modalVisible: !this.state.modalVisible,
        mensajeAlert: 'Internet connection is no available'
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <TextInput
            style={[styles.input, styles.font]}
            placeholder="Email"
            value={this.state.email}
            onChangeText={item => {
              // console.log("email:  ", item);
              const email = item.trim();

              // console.log("email despues:", item);
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
            <Text style={[styles.font, { color: "#fff" }]}>
              {this.state.msjError}
            </Text>
          </View>
        ) : null}
        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.styleButtom}
        >
          <TouchableOpacity
            onPress={() => { this.login(this.state.email, this.state.pass); }}
          >
            <Text style={[styles.inputButtom, styles.font]}>
              Login{" "}
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
                  Ok
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
    maxWidth: 450,
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
    marginTop: "90%",
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  },
  innerContainer: {
    marginTop: "30%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  error: {
    borderRadius: 15,
    backgroundColor: "#FE6363",
    alignItems: "center",
    padding: 10,
    marginVertical: 5
  }
});
