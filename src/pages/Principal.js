import React from "react";
import { StyleSheet } from "react-native";

import Inicio from "../container/principal/Inicio";
import Login from "../container/principal/Login";
import LinearGradient from './../components/shared/LinearGradient';

export default function Principal(props) {
  return (
    <LinearGradient styles={styles.container}>
      <Inicio />
      <Login navigation={props.navigation} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01B8E2",
    padding: 30
  }
});
