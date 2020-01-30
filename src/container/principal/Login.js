import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login(props) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("InicioSesion")}
      >
        <View style={style.styleButtonInt}>
          <Text style={[style.buttonInit, style.font]}>Login</Text>
        </View>
      </TouchableOpacity>

      <View style={style.styleButtonReg}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Registro")}>
          <Text style={[style.buttonReg, style.font]}>
            Sign in{" "}
            <Ionicons name="md-arrow-forward" size={16} color="#0097CD" />{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "stretch",
    maxWidth: 450
  },
  styleButtonInt: {
    alignItems: "center",
    marginVertical: 8
  },
  styleButtonReg: {
    alignItems: "stretch",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20
  },
  buttonInit: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33,
    color: "#fff"
  },
  buttonReg: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 13,
    paddingHorizontal: 33,
    color: "#0097CD"
  },
  font: {
    fontFamily: "PoppinsRegular"
  }
});
