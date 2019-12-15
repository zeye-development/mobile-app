import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { validatorEmail } from "../../helpers/validatorEmail";

export default function Formulario(props) {
  let [getEmail, setEmail] = useState({
    email: "",
    caracteres: 0,
    validator: ""
  });

  validarEmail = event => {
    const email = event.nativeEvent.text;
    const emailLimpio = email.trim();
    let caracteresEmail = event.nativeEvent.eventCount;
    setEmail({ caracteres: caracteresEmail });
    if (getEmail.caracteres >= 10) {
      if (validatorEmail(emailLimpio)) {
        setEmail({ ...getEmail, email: emailLimpio, validator: true });
      } else {
        setEmail({ ...getEmail, validator: false });
      }
    }
  };

  let [getPass, setPass] = useState({
    pass: "",
    repeatPass: "",
    caracteres: 0,
    iguales: null
  });

  validarPass = event => {
    const pass = event.nativeEvent.text;
    let caracteresPass = event.nativeEvent.eventCount;
    const passLimpio = pass.trim();
    // console.log(event.currentTarget);
    setPass({ caracteres: caracteresPass });
    if (getPass.caracteres >= 6) {
      if (event.currentTarget == 143) {
        setPass({ ...getPass, pass: passLimpio });
      } else {
        setPass({ ...getPass, repeatPass: passLimpio });
      }

      if (getPass.pass === getPass.repeatPass) {
        setPass({ ...getPass, iguales: true });
      } else {
        setPass({ ...getPass, iguales: false });
      }
    } else if (getPass.caracteres < 6) {
      setPass({ ...getPass, iguales: false });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <TextInput style={styles.input} placeholder="User" />
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          placeholder="Email"
          style={[
            styles.input,
            getEmail.validator === false ? styles.error : null
          ]}
          onChange={validarEmail}
        />
      </View>

      <View style={styles.viewContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          onChange={validarPass}
        />
      </View>

      <View style={styles.viewContainer}>
        <TextInput
          placeholder="Repeat Password"
          secureTextEntry={true}
          style={[
            styles.input,
            getPass.iguales === true ? styles.igual : null,
            getPass.iguales === false ? styles.error : null
          ]}
          onChange={validarPass}
        />
      </View>
      <View style={styles.styleButtom}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("InicioSesion")}
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
  error: {
    borderWidth: 2,
    borderColor: "rgb(204, 0, 0)",
    borderRadius: 15
  },
  igual: {
    borderWidth: 2,
    borderColor: "#00DFAA",
    borderRadius: 15
  }
});
