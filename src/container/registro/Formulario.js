import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import md5 from "md5";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: null,
      pass: null,
      pass_v: null
    };
  }

  async login() {
    console.log(this.state.email);
    console.log(this.state.pass);
    console.log(this.state.pass_v);

    try {
      let response = await fetch("http://189.213.227.211:8080/user", {
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
          license_key:  str(Math.floor(Math.random() * 10*Math.floor(Math.random() * 10*Math.floor(Math.random() * 10000000000) )))
        })
      });

      let responseJson = await response.json();
      console.log(responseJson);

      if (responseJson.status === 200) {
        this.props.navigation.replace("InicioSesion");
      } else {
        Alert.alert("Error", "El Correo o la contraseña no son correctos");
      }
    } catch (error) {
      Alert.alert("Error", "Usted no dispone de una conexion a internet");
    }
  }

  render() {
    // let [getEmail, setEmail] = useState({
    //   email: "",
    //   validator: false
    // });

    // validarEmail = event => {
    //   // console.log(event);
    //   const email = event.nativeEvent.text;
    //   const emailLimpio = email.trim();
    //   let caracteresEmail = event.nativeEvent.eventCount;
    //   if (caracteresEmail >= 13) {
    //     if (validatorEmail(emailLimpio)) {
    //       console.log(getEmail);
    //       setEmail({ ...getEmail, email: emailLimpio, validator: true });
    //     } else if (!validatorEmail(emailLimpio)) {
    //       setEmail({ ...getEmail, validator: false });
    //     }
    //   }
    // };
    // let [getPass, setPass] = useState({
    //   Pass: "",
    //   validator: false
    // });

    // validarPass = event => {
    //   const pass = event.nativeEvent.text;
    //   let caracteresPass = event.nativeEvent.eventCount;
    //   const passLimpio = pass.trim();
    //   if (caracteresPass >= 5) {
    //     // console.log(getPass);
    //     setPass({ ...getPass, Pass: passLimpio, validator: true });
    //   } else if (getPass.caracteres < 6) {
    //     setPass({ ...getPass, validator: false });
    //   }
    // };
    // const [getError, setError] = useState(false);
    // enviarRequest = () => {
    //   // console.log(getEmail.validator);
    //   // console.log(getPass.validator);
    //   if (getEmail.validator && getPass.validator) {
    //     // props.navigation.navigate("Dashboard");
    //   } else {
    //     setError(true);
    //     setTimeout(() => {
    //       setError(false);
    //     }, 3000);
    //   }
    // };
    return (
      <View style={styles.container}>
        {/* <View style={styles.viewContainer}>
      <TextInput style={styles.input} placeholder="User" />
    </View> */}
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

        <View style={styles.styleButtom}>
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
        </View>
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
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33,
    borderWidth: 2,
    borderColor: "transparent"
  },
  inputButtom: {
    fontSize: 18,
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
  }
});
