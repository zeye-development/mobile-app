import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function FotoPerfil(props) {
  const [solicitado, setSolicitado] = useState({ solicitado: false });

  let imagen = props.imagen;
  console.log('photo')  
  console.log(props)

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.viewContainer}>
          <Image
            // source={require("../../../assets/perfil.png")}
            source={{uri:`http://189.213.227.211:8443/file=${imagen[0]}`}}
            style={styles.imageBackground}
          />
        </View>
      </View>
      {solicitado.solicitado == false ? (
        <TouchableOpacity
          onPress={() => setSolicitado({ ...solicitado, solicitado: true })}
        >
          <Text style={[styles.usuario, styles.noSolicitado]}>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={16}
              color="#fff"
            />{" "}
            Usuario no Requerido
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setSolicitado({ ...solicitado, solicitado: false })}
        >
          <Text style={[styles.usuario, styles.solicitado]}>
            <AntDesign name="closecircleo" size={16} color="#fff" /> Usuario
            Requerido
          </Text>
        </TouchableOpacity>
      )}
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
    textAlign: "center",
    color: "#fff",
    borderRadius: 15,
    marginTop: 5,
    fontFamily: "PoppinsRegular",
    fontSize: 14
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
    // alignItems: "center",
  },
  solicitado: {
    backgroundColor: "#FE6363"
  },

  noSolicitado: {
    backgroundColor: "#00DFAA"
  }
});
