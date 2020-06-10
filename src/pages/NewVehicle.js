import React from "react";
import { StyleSheet, ScrollView, View,SafeAreaView,KeyboardAvoidingView } from "react-native";

import Header from "../container/new-vehicle/Header";
import Formulario from "../container/new-vehicle/Formulario";

export default function NuevoUsuario(props) {
  return (
    <SafeAreaView>
       <KeyboardAvoidingView  behavior="height" enabled>
        <ScrollView>
          <View style={style.container}>
            <Header navigation={props.navigation} />
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
