import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function BodyMensaje() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text
          style={{ fontSize: 20, color: "#00425A", fontFamily: "PoppinsBold" }}
        >
          Cambiar IP
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.text1}>Ingresa una nueva dirección ip</Text>
        <Text style={styles.text1}>para realizar pruebas.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 45,
    marginBottom: 10,
    maxWidth: 450,
    paddingHorizontal: 30
  },
  viewContainer: {
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0097CD",
    width: 150,
    height: 150,
    borderRadius: 100
  },
  text: {
    alignItems: "center",
    marginBottom: 15
  },
  text1: {
    fontSize: 16,
    color: "#00425A",
    fontFamily: "PoppinsRegular"
  }
});
