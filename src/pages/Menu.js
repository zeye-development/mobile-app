import React, { Component } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ height: "100%", alignItems: "center" }}>
        <View
          style={{
            height: "10%",
            width: "100%",
            backgroundColor: "#0097CD",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "PoppinsRegular",
              marginTop: 30,
              fontSize:17
            }}
          >
            {" "}
            Menu{" "}
          </Text>
        </View>

        <Text
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={{
            fontFamily: "PoppinsRegular",
            marginTop: '10%',
            paddingHorizontal: 30,
            paddingVertical: 10,
            fontSize: 17,
          }}
        >
          <Ionicons name="md-list-box" size={18} color="#0097CD" /> Dashboard
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={{
            fontFamily: "PoppinsRegular",
            marginTop: 15,
            paddingHorizontal: 30,
            paddingVertical: 10,
            fontSize: 17,
          }}
        >
          <Ionicons name="md-contacts" size={18} color="#0097CD" /> Usuarios
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={{
            fontFamily: "PoppinsRegular",
            marginTop: 15,
            paddingHorizontal: 30,
            paddingVertical: 10,
            fontSize: 17,
          }}
        >
          <Ionicons name="md-bookmarks" size={18} color="#0097CD" />{' '}
          Eventos
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={{
            fontFamily: "PoppinsRegular",
            marginTop: 15,
            paddingHorizontal: 30,
            paddingVertical: 10,
            fontSize: 17,
          }}
        >
          <Ionicons name="md-camera" size={18} color="#0097CD" />{' '}
          Camaras
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={{
            fontFamily: "PoppinsRegular",
            marginTop: 15,
            paddingHorizontal: 30,
            paddingVertical: 10,
            fontSize: 17,
          }}
        >
          <Ionicons name="md-settings" size={18} color="#0097CD" />{' '}
          Configuración
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={{
            fontFamily: "PoppinsRegular",
            marginTop: 15,
            paddingHorizontal: 30,
            paddingVertical: 10,
            fontSize: 17,
          }}
        >
          <Ionicons name="md-phone-portrait" size={18} color="#0097CD" />{' '}
          Dispositivos
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={{
            fontFamily: "PoppinsRegular",
            marginTop: 15,
            paddingHorizontal: 30,
            paddingVertical: 10,
            fontSize: 17,
          }}
        >
          <Ionicons name="md-contact" size={18} color="#0097CD" />{' '}
          Cuentas
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("Dashboard")}
          style={{
            fontFamily: "PoppinsRegular",
            marginTop: 15,
            paddingHorizontal: 30,
            paddingVertical: 10,
            fontSize: 17,
          }}
        >
          <Ionicons name="md-log-out" size={18} color="#0097CD" />{' '}
          Salir
        </Text>
      </View>
    );
  }
}
