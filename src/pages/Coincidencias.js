import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "../container/coincidencia/Header";
import Perfiles from "../container/coincidencia/Perfiles";

export default function Coincidencia(props) {
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.containerSuperior}
        >
          <Header navigation={props.navigation} />
        </LinearGradient>
        <View>
          <Perfiles navigation={props.navigation} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  containerSuperior: {
    // backgroundColor: "#0097CD",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
    // paddingLeft: 5
  }
});
