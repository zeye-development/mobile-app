import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LinearGradientComponent from "./../../components/shared/LinearGradient";
import config from './../../../config';

export default function Formulario(props) {
  const [ip, setIp] = useState('');

  const handleChangeIp = () => {
    console.log('hola', config.API_URL)
    config.API_URL = ip
    console.log('hola', config.API_URL)    
    props.navigation.navigate("InicioSesion")
  }

  return (
    <>
      <View style={styles.text}>
        <Text style={styles.text1}>Dirección ip actual: </Text>
        <Text style={styles.text1}>{ip}</Text>
      </View>    
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <TextInput 
            placeholder="Ip"
            style={styles.input}
            onChangeText={(text) => setIp(text)}
          />
        </View>

        <LinearGradientComponent
          styles={styles.styleButtom}
        >
          <TouchableOpacity
            onPress={() => handleChangeIp()}
          >
            <Text style={styles.inputButtom}>
              Guardar IP{" "}
              <Ionicons name="md-arrow-forward" size={18} color="#fff" />
            </Text>
          </TouchableOpacity>
        </LinearGradientComponent>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 450,
    paddingHorizontal: 30
  },
  inputButtom: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    padding: 13,
    color: "#fff",
    textAlign: "center"
  },
  input: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    paddingVertical: 13,
    paddingHorizontal: 33
  },
  text: {
    alignItems: "center",
    marginBottom: 15
  },
  text1: {
    fontSize: 16,
    color: "#00425A",
    fontFamily: "PoppinsRegular"
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
  viewContainerCheck: {
    padding: 13,
    color: "#EBF2F4",
    alignItems: "center",
    marginTop: 7,
    marginBottom: 15
  }
});
