import React, { useState } from "react";
import { StyleSheet, Text, View, ProgressBarAndroid } from "react-native";
import { FontAwesome, Entypo, Foundation } from "@expo/vector-icons";

export default class Opciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = { estado: false, Barra: 0, BarraP: 1 };
  }

  Barra1 = () => {
    this.setState({ Barra: 1 });
    this.setState({ BarraP: 0 });
    this.setState({ estado: true });
    this.props.CambiarEstado(true);
  };

  Barra2 = () => {
    this.setState({ Barra: 0 });
    this.setState({ BarraP: 1 });
    this.setState({ estado: false });
    this.props.CambiarEstado(false);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainerGrup}>
          {/* <View style={styles.viewContainerInput}>
            <View style={{ alignItems: "center" }}>
              {this.state.estado ? (
                <Text
                  onPress={this.Barra1}
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
                  onPress={this.Barra1}
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
              progress={this.state.Barra}
            />
          </View> */}

          <View style={styles.viewContainerInput}>
            <View style={{ alignItems: "center" }}>
              {this.state.estado ? (
                <Text
                  onPress={this.Barra2}
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    alignContent: "center",
                    fontFamily: "PoppinsSemiBold",
                    fontSize: 14
                  }}
                >
                  <FontAwesome name="car" size={24} color="white" />
                  Vehículos
                </Text>
              ) : (
                <Text
                  onPress={this.Barra2}
                  style={{
                    color: "rgb(255, 255, 255)",
                    alignContent: "center",
                    fontFamily: "PoppinsSemiBold",
                    fontSize: 14
                  }}
                >
                  <FontAwesome name="car" size={24} color="white" />
                  Vehículos
                </Text>
              )}
            </View>

            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              color="rgb(255, 255, 255)"
              progress={this.state.BarraP}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    maxWidth: 450
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
