import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function LoginRedes() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.viewContainer}>
          <Text style={styles.google}>
            <Image
              source={require("../../../assets/google.png")}
              style={{ width: 18, height: 18 }}
            />{" "}
            Iniciar con Google
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.viewContainerF}>
        <TouchableOpacity>
          <Text style={styles.facebook}>
            <FontAwesome name="facebook" size={20} color="#fff" /> Iniciar con
            Facebook
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", margin: 5 }}>
        <Text
          style={{
            fontSize: 16,
            color: "#00425A",
            fontFamily: "PoppinsRegular"
          }}
        >
          o
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  google: {
    color: "#00425A",
    fontSize: 16,
    paddingVertical: 13,
    fontFamily: "PoppinsRegular"
  },
  viewContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#00425A",
    marginVertical: 5,
    alignItems: "center"
  },
  viewContainerF: {
    borderRadius: 15,
    backgroundColor: "#3b5998",
    marginVertical: 5,
    alignItems: "stretch"
  },
  facebook: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 13,
    textAlign: "center",
    fontFamily: "PoppinsRegular"
  }
});
