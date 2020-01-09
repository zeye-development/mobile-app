import React, { useState } from "react";
import { StyleSheet, Text, View, ProgressBarAndroid } from "react-native";
import { Entypo, Foundation } from "@expo/vector-icons";

export default function Opciones() {
  let [Barra, setBarra] = useState(0);
  let [BarraP, setBarraP] = useState(1);
  let [True, setTrue] = useState(false);

  let Barra1 = () => {
    setBarra((Barra = 1));
    setBarraP((BarraP = 0));
    setTrue((True = true));
  };

  let Barra2 = () => {
    setBarra((Barra = 0));
    setBarraP((BarraP = 1));
    setTrue((True = false));
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewContainerGrup}>
        <View style={styles.viewContainerInput}>
          <View style={{ alignItems: "center" }}>
            {True ? (
              <Text
                onPress={Barra1}
                style={{
                  color: "rgb(255, 255, 255)",
                  alignContent: "center",
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14
                }}
              >
                <Foundation
                  name="prohibited"
                  size={18}
                  color="rgb(255, 255, 255)"
                />{" "}
                Solicitados
              </Text>
            ) : (
              <Text
                onPress={Barra1}
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                  alignContent: "center",
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14
                }}
              >
                <Foundation
                  name="prohibited"
                  size={18}
                  color="rgba(255, 255, 255, 0.5)"
                />{" "}
                Solicitados
              </Text>
            )}
          </View>

          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            color="#fff"
            progress={Barra}
          />
        </View>

        <View style={styles.viewContainerInput}>
          <View style={{ alignItems: "center" }}>
            {True ? (
              <Text
                onPress={Barra2}
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                  alignContent: "center",
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14
                }}
              >
                <Entypo
                  name="users"
                  size={18}
                  color="rgba(255, 255, 255, 0.5)"
                />{" "}
                Usuarios
              </Text>
            ) : (
              <Text
                onPress={Barra2}
                style={{
                  color: "rgb(255, 255, 255)",
                  alignContent: "center",
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14
                }}
              >
                <Entypo name="users" size={18} color="rgb(255, 255, 255)" />{" "}
                Usuarios
              </Text>
            )}
          </View>

          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            color="rgb(255, 255, 255)"
            progress={BarraP}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    maxWidth: 350
  },
  viewContainerGrup: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: 'stretch',
    marginTop: 20,
    // marginBottom: 10,
    // backgroundColor: '#fff',
    borderRadius: 15
  },
  viewContainerInput: {
    // borderRadius: 15,
    // backgroundColor: '#EBF2F4',
    width: 145,
    alignItems: "stretch"
  }
});
