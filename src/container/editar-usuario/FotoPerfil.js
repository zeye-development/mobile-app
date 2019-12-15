import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function FotoPerfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.viewContainer}>
          <ImageBackground
            source={require("../../../assets/perfil.png")}
            style={styles.imageBackground}
          >
            <AntDesign name="plus" size={50} color="#EBF0F2" />
          </ImageBackground>
        </View>
      </TouchableOpacity>
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
    marginTop: 15,
    marginBottom: 10,
    // alignItems: 'stretch',
    maxWidth: 350,
    paddingHorizontal: 30
  },
  viewContainer: {
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 130,
    borderRadius: 100
  },
  usuario: {
    padding: 13,
    backgroundColor: "#00DFAA",
    textAlign: "center",
    color: "#fff",
    borderRadius: 15,
    marginTop: 5
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
