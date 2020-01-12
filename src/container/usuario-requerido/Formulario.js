import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Formulario(props) {
  console.log("profile");
  // console.log(props.navigation.state.params.user)
  let {
    _id,
    names,
    surnames,
    images,
    nationality,
    sex,
    birth_date
  } = props.navigation.state.params.user;

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>Nombre: </Text>
        <Text style={styles.input}>{names[0]}</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>Apellido: </Text>
        <Text style={styles.input}>{surnames[0]}</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>
          Identificacion:{" "}
        </Text>
        <Text style={styles.input}>{_id}</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>
          Nacionalidad:{" "}
        </Text>
        <Text style={styles.input}>{nationality}</Text>
      </View>

      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>Sexo: </Text>
        <Text style={styles.input}>{sex}</Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={[styles.input, { fontWeight: "bold" }]}>
          Fecha de Nacimiento:{" "}
        </Text>
        <Text style={styles.input}>{birth_date}</Text>
      </View>

      {/* <View style={styles.viewContainerGrup}>
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
        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.viewContainerButtom1}
        >
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
        </LinearGradient>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 450,
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
