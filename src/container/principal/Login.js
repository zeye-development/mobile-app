import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login(props) {
  // console.log(props.navigation)
  // const _onPressSession = () => {
  //     navigate('InicioSesion');
  // }
  // const _onPressRegiste = () => {
  //     navigate('Registro');
  // }
  // console.log(props);

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("InicioSesion")}
      >
        <View style={style.styleButtonInt}>
          <Text style={style.buttonInit}>Iniciar Sesion</Text>
        </View>
      </TouchableOpacity>

      <View style={style.styleButtonReg}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Registro")}>
          <Text style={style.buttonReg}>
            Registrarme{" "}
            <Ionicons name="md-arrow-forward" size={18} color="#0097CD" />{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // marginBottom: 20,
    alignItems: "stretch",
    maxWidth: 350
  },
  styleButtonInt: {
    alignItems: "center",
    marginVertical: 10
  },
  styleButtonReg: {
    alignItems: "stretch",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20
  },
  buttonInit: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33,
    color: "#fff"
  },
  buttonReg: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 13,
    paddingHorizontal: 33,
    color: "#0097CD"
  }
});
