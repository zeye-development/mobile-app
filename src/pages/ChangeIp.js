import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, KeyboardAvoidingView } from "react-native";

import Header from "../container/change-ip/Header";
import BodyMensaje from "../container/change-ip/BodyMensaje";
import Formulario from "../container/change-ip/Formulario";

export default function RecuperarPaso1(props) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <View style={style.container}>
            <Header navigation={props.navigation} />
            <BodyMensaje />
            <Formulario navigation={props.navigation} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
    paddingVertical: 30,
    marginLeft: 5
  }
});
