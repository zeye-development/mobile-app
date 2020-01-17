import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../container/galeria/Header";
import Camera from "../container/galeria/Camera";
import Imagenes from "../container/galeria/Imagenes";

export default function Galeria(props) {
  return (
    <View style={style.container}>
      <ScrollView>
        <Header navigation={props.navigation} />
        <Camera navigation={props.navigation} />
        <Imagenes navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff"
  }
});
