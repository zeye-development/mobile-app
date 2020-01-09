import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "../container/dashboard/Header";
import ProgreseBar from "../container/dashboard/ProgreseBar";
import Opciones from "../container/dashboard/Opciones";
import Perfiles from "../container/dashboard/Perfiles";
import { LinearGradient } from "expo-linear-gradient";

export default function Dashboard(props) {
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
          <ProgreseBar navigation={props.navigation} />
          <Opciones navigation={props.navigation} />
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
