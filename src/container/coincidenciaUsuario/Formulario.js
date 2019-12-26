import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Formulario() {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainerGrup}>
        <View style={styles.viewContainerInput}>
          <Text style={styles.input1}>Jhon</Text>
        </View>
        <View style={styles.viewContainerInput}>
          <Text style={styles.input1}>Doe</Text>
        </View>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.input}>Venezuela</Text>
      </View>

      <View style={styles.viewContainer}>
        <Text style={styles.input}>255664556</Text>
      </View>

      <View style={styles.viewContainer}>
        <Text style={styles.input}>Masculino</Text>
      </View>
      <View style={styles.viewContainerCheck}>
        <Text
          style={{
            color: "#00425A",
            fontSize: 14,
            fontFamily: "PoppinsSemiBold"
          }}
        >
          <Ionicons name="md-checkbox-outline" size={16} color="#00425A" />{" "}
          Anadir a solicitados
        </Text>
      </View>

      <View style={styles.styleButtom}>
        <TouchableOpacity>
          <Text style={styles.inputButtom}>
            <Ionicons name="md-person-add" size={18} color="#fff" /> Anadir{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  input: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33
  },
  input1: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33,
    marginRight: 13
  },
  inputButtom: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    padding: 13,
    color: "#fff",
    textAlign: "center"
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5
  },
  viewContainerGrup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 15
  },
  viewContainerInput: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    width: 140
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "stretch",
    backgroundColor: "#0097CD"
  },
  viewContainerCheck: {
    padding: 13,
    color: "#EBF2F4",
    alignItems: "center",
    marginTop: 7,
    marginBottom: 15
  }
});
