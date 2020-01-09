import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Imagen(props) {
  return (
    <View style={styles.img}>
      <Image
        style={{ width: 90, height: 90 }}
        source={require("../../../assets/captura.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    margin: 3,
    borderRadius: 10
  }
});
