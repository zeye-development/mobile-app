import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FotoPerfil(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          source={require("../../../assets/perfil.png")}
          style={styles.imageBackground}
        />
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
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    // alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  viewContainer: {
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 130,
    borderRadius: 70
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  usuario: {
    padding: 13,
    backgroundColor: "#00DFAA",
    // textAlign: "center",
    justifyContent: "center",
    color: "#fff",
    borderRadius: 15,
    marginTop: 5
  }
});
