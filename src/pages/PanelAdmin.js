import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "../container/panel-admin/Header";
import PerfilUsuario from "../container/panel-admin/PerfilUsuario";
import ButtomPanel from "../container/panel-admin/ButtomPanel";
import Formulario from "../container/panel-admin/Formulario";

export default function PanelAdmin(props) {
  return (
    <View>
      <ScrollView>
        <View style={styles.containerSuperior}>
          <Header navigation={props.navigation} />
          <PerfilUsuario navigation={props.navigation} />
        </View>
        <View>
          <ButtomPanel navigation={props.navigation} />
          <Formulario />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  containerSuperior: {
    backgroundColor: "#0097CD",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
    // paddingLeft: 5
  }
});
