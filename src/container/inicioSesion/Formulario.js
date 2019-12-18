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
    validator: false
  });

  validarEmail = event => {
    // console.log(event);
    const email = event.nativeEvent.text;
    const emailLimpio = email.trim();
    let caracteresEmail = event.nativeEvent.eventCount;
    if (caracteresEmail >= 13) {
      if (validatorEmail(emailLimpio)) {
        console.log(getEmail);
        setEmail({ ...getEmail, email: emailLimpio, validator: true });
      } else if (!validatorEmail(emailLimpio)) {
        setEmail({ ...getEmail, validator: false });
      }
    }
  };
  let [getPass, setPass] = useState({
    Pass: "",
    validator: false
  });

  validarPass = event => {
    const pass = event.nativeEvent.text;
    let caracteresPass = event.nativeEvent.eventCount;
    const passLimpio = pass.trim();
    if (caracteresPass >= 5) {
      // console.log(getPass);
      setPass({ ...getPass, Pass: passLimpio, validator: true });
    } else if (getPass.caracteres < 6) {
      setPass({ ...getPass, validator: false });
    }
  };
  const [getError, setError] = useState(false);
  enviarRequest = () => {
    // console.log(getEmail.validator);
    // console.log(getPass.validator);
    if (getEmail.validator && getPass.validator) {
      props.navigation.navigate("Dashboard");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input}
          onChange={validarEmail}
          placeholder="User"
        />
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          onChange={validarPass}
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
        />
      </View>
      {getError ? (
        <Text style={styles.usuario}>User o Password invalidos</Text>
      ) : null}
      <View style={styles.styleButtom}>
        <TouchableOpacity onPress={enviarRequest}>
          <Text style={styles.inputButtom}>
            Iniciar Sesion{" "}
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
    alignItems: "center",
    marginBottom: 20,
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
  usuario: {
    padding: 13,
    backgroundColor: "red",
    textAlign: "center",
    color: "#fff",
    borderRadius: 15,
    marginTop: 5
  }
});
