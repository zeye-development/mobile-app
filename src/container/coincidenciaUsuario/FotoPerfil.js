import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function FotoPerfil(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          source={require("../../../assets/perfil.png")}
          style={styles.imageBackground}
        />
      </View>
      <AntDesign name="arrowright" size={32} color="#00425A" />
      <View style={[styles.viewContainer, styles.solicitado]}>
        <Image
          source={require("../../../assets/perfil.png")}
          style={styles.imageBackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    // alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30,
    flexDirection: "row"
  },
  viewContainer: {
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 110,
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
    marginTop: 5,
    fontFamily: "PoppinsRegular"
  },
  solicitado: {
    borderColor: "#FE6363",
    borderWidth: 3
  },

  noSolicitado: {
    borderColor: "#00DFAA",
    borderWidth: 3
  }
});
