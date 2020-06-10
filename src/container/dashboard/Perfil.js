import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import config from './../../../config';

export default class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false
    }
  }

  OnClickTrue = () => {
    if (this.state.click) {

      this.setState({ click: false })
    };
    if (!this.state.click) {
      this.setState({ click: true })
    };
  }
  
  render() {
    let { _id, model, plate, vtype, year } = this.props.usuario;
    // "model": "FIESTA",
    // "owner": "lewistest@gmail.com",
    // "plate": "AA56GH1",
    // "vtype": "CAR",
    // "year": 2002,

    return (
      <View>
        <View style={styles.container}>
          <View style={styles.container}>
            {/* <View style={styles.img}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 100 }}
                source={{ uri: `${config.API_URL}/file=${images[0]}` }}
              />
            </View> */}
            <View style={{ justifyContent: "center", paddingLeft: 10 }}>
              <Text
                style={[
                  styles.textColor,
                  {
                    fontFamily: "PoppinsSemiBold"
                  }
                ]}
              >
                Vehículo: {model}{" "} Placa: {plate}
              </Text>
              <Text
                style={[
                  styles.textColor2,
                  {
                    fontFamily: "PoppinsRegular"
                  }
                ]}
              >
                Año del Vehículo{" "} {year}
              </Text>
            </View>
          </View>

          {!this.state.click ? (
            <TouchableOpacity onPress={this.OnClickTrue}>
              <View style={styles.styleButtom}>
                <Ionicons name="md-more" size={18} color="#00425A" />
              </View>
            </TouchableOpacity>
          ) : (
              <TouchableOpacity onPress={this.OnClickTrue}>
                <View style={styles.styleButtom}>
                  <Ionicons name="md-close" size={18} color="#00425A" />
                </View>
              </TouchableOpacity>
            )}
        </View>
        {this.state.click ? (
          <View style={styles.containerOptionButtom}>
            <View style={styles.containerButtom}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("UsuarioRequerido", { user: this.props.usuario })}
              >
                <Text style={styles.optionButtom}>Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Galeria', { id: _id, images })}
              >
                <Text style={styles.optionButtom}>Galería</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
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
    color: "#00425A",
    fontSize: 14
  },
  textColor2: {
    color: "#00425A",
    fontSize: 15
  },
  styleButtom: {
    justifyContent: "center",
    paddingHorizontal: 10
  },
  optionButtom: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
    fontFamily: "PoppinsRegular",
    fontSize: 12
  },
  containerOptionButtom: {
    position: "absolute",
    right: 25,
    top: 0
  },
  containerButtom: {
    top: -10,
    height: 70,
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});
