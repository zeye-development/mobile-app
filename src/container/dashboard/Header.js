import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.icon}>
          {" "}
          <Feather name="settings" size={20} color="#fff" />{" "}
        </Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>Dashboard</Text>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("InicioSesion")}
      >
        <Text style={styles.icon}>
          {" "}
          <Ionicons name="ios-log-in" size={20} color="#fff" />{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#0097CD',
    maxWidth: 350,
    flexDirection: "row",
    // alignItems: 'flex-start',
    justifyContent: "space-between",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10
  },
  headerText: {
    color: "#fff",
    fontSize: 16
  },
  icon: {
    padding: 6
  }
});
