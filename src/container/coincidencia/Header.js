import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.icon}>
            {" "}
            <Ionicons name="md-arrow-back" size={18} color="#fff" />{" "}
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Coincidencias</Text>

        <Text style={styles.icon}> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 450,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10
  },
  headerText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "PoppinsSemiBold"
  },
  icon: {
    padding: 6
  }
});
