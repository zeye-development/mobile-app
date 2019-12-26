import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Formulario(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <TextInput placeholder="Email" style={styles.input} />
      </View>
      <LinearGradient
        colors={["#0097CD", "#01B8E2"]}
        start={[0, 0.8]}
        end={[0.8, 0.5]}
        style={styles.styleButtom}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("RecuperarPaso2")}
        >
          <Text style={styles.inputButtom}>
            Continuar{" "}
            <Ionicons name="md-arrow-forward" size={18} color="#fff" />
          </Text>
        </TouchableOpacity>
      </LinearGradient>
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
  inputButtom: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    padding: 13,
    color: "#fff",
    textAlign: "center"
  },
  input: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    paddingVertical: 13,
    paddingHorizontal: 33
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5
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
