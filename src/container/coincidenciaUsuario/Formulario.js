import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function Formulario() {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Solicitado: </Text>
          <Text style={styles.input}>Si</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Nombre: </Text>
          <Text style={styles.input}>Jhon</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Apellido: </Text>
          <Text style={styles.input}>Doe</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Identificacion: </Text>
          <Text style={styles.input}>15266589</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Nacionalidad: </Text>
          <Text style={styles.input}>Venezuela</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Sexo: </Text>
          <Text style={styles.input}>Masculino</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Fecha Nacimiento: </Text>
          <Text style={styles.input}>24/05/75</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  input: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    // paddingTop: 2,
    paddingHorizontal: 33
  },
  inputTitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    paddingTop: 5,
    paddingHorizontal: 33
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5
  },
  containerInfo: {
    marginVertical: 5
  }
});
