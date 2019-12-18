import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FotoPerfil() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.viewContainer}>
          <Image
            source={require("../../../assets/perfil.png")}
            style={styles.imageBackground}
          />
        </View>
      </View>
      <Text style={styles.usuario}>
        <Ionicons name="ios-checkmark-circle-outline" size={18} color="#fff" />{" "}
        Usuario Requerido
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  viewContainer: {
    marginVertical: 5,
    // alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 130,
    borderRadius: 100,
    textAlign: "center"
  },
  usuario: {
    paddingVertical: 13,
    backgroundColor: "#00DFAA",
    textAlign: "center",
    color: "#fff",
    borderRadius: 15,
    marginTop: 5
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
    // alignItems: "center",
  }
});
