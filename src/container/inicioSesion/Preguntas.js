import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Preguntas(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("RecuperarPaso1")}
      >
        <View style={styles.viewContainer}>
          <Text style={styles.font}>¿Do you forget your password?</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.viewContainer}>
        <Text style={styles.font1}>¿Aun no tienes cuenta?</Text>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate("Registro")}>
        <View style={styles.viewContainer}>
          <Text style={styles.font2}>
            Sign in{" "}
            <Ionicons name="md-arrow-forward" size={16} color="#00425A" />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 450,
    alignItems: "stretch",
    paddingHorizontal: 30
  },
  viewContainer: {
    alignItems: "center",
    padding: 8
  },
  font: {
    marginBottom: 15,
    color: "#01B8E2",
    fontSize: 16,
    fontFamily: "PoppinsRegular"
  },
  font1: {
    color: "#00425A",
    fontSize: 14,
    fontFamily: "PoppinsRegular"
  },
  font2: {
    color: "#00425A",
    fontSize: 16,
    fontFamily: "PoppinsRegular"
  }
});
