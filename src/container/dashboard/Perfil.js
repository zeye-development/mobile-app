import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";

export default function Perfil(props) {
  let { nombre, conectado, edad } = props.usuario;
  const [getOnclick, setOnClick] = useState({
    click: false
  });
  const OnClickTrue = () => {
    if (getOnclick.click) {
      setOnClick({
        click: false
      });
    } else if (!getOnclick.click) {
      setOnClick({
        click: true
      });
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container}>
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

        {!getOnclick.click ? (
          <TouchableOpacity onPress={OnClickTrue}>
            <View style={styles.styleButtom}>
              <Ionicons name="md-more" size={18} color="#00425A" />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={OnClickTrue}>
            <View style={styles.styleButtom}>
              <Ionicons name="md-close" size={18} color="#00425A" />
            </View>
          </TouchableOpacity>
        )}
      </View>
      {getOnclick.click ? (
        <View style={styles.containerOptionButtom}>
          <View style={styles.containerButtom}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("UsuarioRequerido")}
            >
              <Text style={styles.optionButtom}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.optionButtom}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    justifyContent: "center",
    borderRadius: 100
  },
  textColor: {
    color: "#00425A"
  },
  styleButtom: {
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  optionButtom: {
    paddingHorizontal: 6,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderColor: "#fff"
  },
  containerOptionButtom: {
    position: "absolute",
    right: 25,
    top: 0
  },
  containerButtom: {
    width: 180,
    backgroundColor: "#f2f2f2",
    borderRadius: 2,
    // borderWidth: 1,
    // borderColor: "#000",
    shadowOpacity: 2
  }
});
