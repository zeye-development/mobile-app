import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Formulario(props) {
  return (
    <View style={styles.container}>
      <View style={styles.styleButtom}>
        <TouchableOpacity>
          <Text style={styles.inputButtom}>
            Capturar <Ionicons name="ios-camera" size={20} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.styleButtom1}>
        <TouchableOpacity>
          <Text style={styles.inputButtom1}>
            Cargar <Ionicons name="md-cloud-upload" size={20} color="#00425A" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.styleButtom}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.inputButtom}>
            <Feather name="download" size={20} color="#fff" /> Guardar
          </Text>
        </TouchableOpacity>
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
  inputButtom: {
    fontSize: 18,
    padding: 13,
    color: "#fff"
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: "#0097CD"
  },
  inputButtom1: {
    fontSize: 18,
    padding: 13,
    color: "#00425A"
  },
  styleButtom1: {
    borderRadius: 15,
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "#CCE3EB",
    marginBottom: 45
  }
});
