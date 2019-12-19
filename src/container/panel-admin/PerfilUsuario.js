import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PerfilUsuario(props) {
  return (
    <View style={styles.containerPadre}>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.img}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../../assets/perfil.png")}
            />
          </View>
          <View style={{ justifyContent: "center", paddingLeft: 10 }}>
            <Text
              style={[
                styles.textColor,
                {
                  fontWeight: "bold",
                  fontSize: 18
                }
              ]}
            >
              Jhon Doe{" "}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.textColor}>Plan - </Text>
              <Text style={styles.plan}>Premium</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.cambioPlan}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            Upgrade your plan{"  "}
          </Text>
          <Feather name="refresh-cw" size={14} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPadre: {
    // flex: 1,
    alignItems: "center",
    marginTop: 10,
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 20,
    maxWidth: 350
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 2
  },
  textColor: {
    color: "#fff"
  },
  plan: {
    backgroundColor: "#00DFAA",
    paddingHorizontal: 6,
    paddingVertical: 3,
    fontWeight: "bold",
    borderRadius: 5,
    color: "#fff",
    textAlign: "center"
  },
  cambioPlan: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00425A",
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5
  }
});
