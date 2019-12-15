import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";

// import Perfil from "./Perfil";
export default function Perfiles() {
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
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "9"
    },
    {
      nombre: "Jhon Doe",
      edad: "28 Years",
      img: "../../../assets/perfil.png",
      conectado: "hace 4 min",
      key: "10"
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
        renderItem={({ item }) => {
          let { nombre, conectado, edad } = item;
          return (
            <View style={styles.containerPerfil}>
              <View style={styles.containerPerfil}>
                <View style={styles.img}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../../assets/perfil.png")}
                  />
                </View>
                <View style={{ justifyContent: "center", paddingLeft: 10 }}>
                  <Text style={styles.textColor}>
                    {nombre}{" "}
                    <Foundation name="prohibited" size={16} color="#00425A" />
                  </Text>
                  <Text style={styles.textColor}>
                    {edad} - {conectado}
                  </Text>
                </View>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Ionicons name="md-more" size={18} color="#00425A" />
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.key}
        horizontal={false}
        ItemSeparatorComponent={separador}
        ListEmptyComponent={
          <Text
            style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
          >
            No hay usuarios
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
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
