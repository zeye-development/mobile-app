import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Formulario(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>Nombre: </Text>
        <Text style={styles.input}>Jhon</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>Apellido: </Text>
        <Text style={styles.input}>Doe</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>Pais: </Text>
        <Text style={styles.input}>Venezuela</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>
          Identificacion:{" "}
        </Text>
        <Text style={styles.input}>15645235</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>Sexo: </Text>
        <Text style={styles.input}>Masculino</Text>
      </View>
      <View style={styles.viewContainerGrup}>
        <View style={styles.viewContainerButtom}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                padding: 13,
                color: "#01B8E2",
                textAlign: "center",
                fontFamily: "PoppinsRegular"
              }}
            >
              <Ionicons name="md-trash" size={18} color="#01B8E2" /> Eliminar{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewContainerButtom1}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("EditarUsuario")}
          >
            <Text
              style={{
                fontSize: 16,
                padding: 13,
                color: "#fff",
                textAlign: "center",
                fontFamily: "PoppinsRegular"
              }}
            >
              <Ionicons name="md-create" size={18} color="#fff" /> Editar{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  input: {
    fontSize: 16,
    paddingVertical: 13,
    // paddingHorizontal: 33,
    marginRight: 5,
    fontFamily: "PoppinsRegular"
  },
  viewContainer: {
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5,
    paddingHorizontal: 33
  },
  viewContainerGrup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 15
  },
  viewContainerInput: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    width: 145
  },
  viewContainerButtom: {
    borderRadius: 15,
    backgroundColor: "#D9E3E6",
    width: 140,
    // padding: 6,
    alignItems: "stretch"
  },
  viewContainerButtom1: {
    borderRadius: 15,
    backgroundColor: "#01B8E2",
    width: 140,
    // padding: 6,
    alignItems: "stretch"
  }
});
