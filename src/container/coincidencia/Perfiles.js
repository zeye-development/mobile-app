import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";

import Perfil from "./Perfil";
export default function Perfiles(props) {
  const usuarios = [
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "0"
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "1"
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "2"
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "3"
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "4"
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "6"
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "7"
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "8"
    }
  ];

  separador = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#f2f2f2",
          marginVertical: 10
        }}
      ></View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <Perfil navigation={props.navigation} usuario={item} />
        )}
        keyExtractor={item => item.key}
        horizontal={false}
        ItemSeparatorComponent={separador}
        ListEmptyComponent={
          <Text
            style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
          >
            No se encontraron coincidencias
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 10
  },
  containerPerfil: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    justifyContent: "center",
    borderRadius: 100
  },
  textColor: {
    color: "#00425A"
  }
});