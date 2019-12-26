import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil(props) {
  let { nombre, conectado, edad } = props.usuario;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("CoincidenciaUsuario")}
    >
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.img}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../../assets/perfil.png")}
            />
          </View>
          <View style={{ justifyContent: "center", paddingLeft: 10 }}>
            <Text style={[styles.textColor, { fontFamily: "PoppinsSemiBold" }]}>
              {nombre}{" "}
            </Text>
            <Text style={[styles.textColor, { fontFamily: "PoppinsRegular" }]}>
              {edad} - {conectado}
            </Text>
          </View>
        </View>
        {/* <View style={styles.styleButtom}>
          <Ionicons name="md-more" size={18} color="#00425A" />
        </View> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    justifyContent: "center",
    borderRadius: 100
  },
  textColor: {
    color: "#00425A",
    fontSize: 14
  },
  styleButtom: {
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 10
  }
});
