import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Preguntas(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.font}>¿Do you have account?</Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("InicioSesion")}
      >
        <View style={styles.viewContainer}>
          <Text style={styles.font2}>
            Login{" "}
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
    paddingVertical: 3
  },
  font: {
    marginBottom: 5,
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
