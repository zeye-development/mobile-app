import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Formulario(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainerGrup}>
        <View style={styles.viewContainerInput}>
          <TextInput style={styles.input1} value="Jhon" />
        </View>
        <View style={styles.viewContainerInput}>
          <TextInput value="Doe" style={styles.input1} />
        </View>
      </View>
      <View style={styles.viewContainer}>
        <TextInput value="venezuela" style={styles.input} />
      </View>

      <View style={styles.viewContainer}>
        <TextInput value="15238529" style={styles.input} />
      </View>

      <View style={styles.viewContainer}>
        <TextInput value="masculino" style={styles.input} />
      </View>

      <View style={styles.viewContainerButtom}>
        {/* <View style={styles.viewContainerButtom1}> */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Dashboard")}
        >
          <Text
            style={{
              fontSize: 18,
              padding: 13,
              color: "#fff",
              textAlign: "center"
            }}
          >
            <MaterialIcons name="file-download" size={20} color="#fff" />{" "}
            Guardar Cambios{" "}
          </Text>
        </TouchableOpacity>
        {/* </View> */}
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
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33
  },
  input1: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33,
    marginRight: 13
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
  // styleButtom: {
  //   borderRadius: 15,
  //   marginVertical: 15,
  //   alignItems: "center",
  //   backgroundColor: "#0097CD"
  // },
  // viewContainerCheck: {
  //   padding: 13,
  //   color: "#EBF2F4",
  //   alignItems: "center",
  //   marginTop: 7,
  //   marginBottom: 15
  // },
  viewContainerButtom: {
    borderRadius: 15,
    backgroundColor: "#01B8E2",
    // padding: 6,
    // alignItems: "stretch"
    marginTop: 15
  }
  // viewContainerButtom1: {
  //   borderRadius: 15,
  //   backgroundColor: "#01B8E2",
  //   width: 140,
  //   // padding: 6,
  //   alignItems: "stretch"
  // }
});
