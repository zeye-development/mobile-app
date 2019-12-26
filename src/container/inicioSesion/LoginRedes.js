import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class LoginRedes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  render() {
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
          <TouchableOpacity
            onPress={() => {
              this.setState({ modalVisible: !this.state.modalVisible });
            }}
          >
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
              fontFamily: "PoppinsRegular",
              color: "#00425A"
            }}
          >
            o
          </Text>
        </View>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              opacity: 0.9
            }}
          ></View>

          <View
            style={{
              width: "80%",
              height: "60%",
              backgroundColor: "white",
              borderRadius: 20,
              borderColor: "#0097CD",
              borderWidth: 10,
              position: "absolute",
              marginTop: "40%",
              marginLeft: "10%"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setState({ modalVisible: !this.state.modalVisible });
              }}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: "#0097CD",
                  textAlign: "center",
                  textShadowRadius: 2,
                  fontFamily: "sans-serif-medium"
                }}
              >
                Lo sentimos, esta funcion no se encuentra disponible.
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
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
