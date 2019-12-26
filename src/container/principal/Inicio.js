import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Inicio() {
  return (
    <View style={style.container}>
      <Text
        style={[
          style.text,
          {
            fontFamily: "PoppinsMedium"
          }
        ]}
      >
        Recognaixer
      </Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 2,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
    // marginTop: 110,
    // maxWidth: 350,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    color: "#fff",
    padding: 5
  }
});
