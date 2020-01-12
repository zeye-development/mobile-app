import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import Imagen from "./Imagen";

export default class Imagenes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisibleAlert: false,
      mensajeAlert: ""
    };
  }

  render() {
    const usuarios = [
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/captura.png",
        conectado: "15889623",
        key: "0",
        solicitado: "si"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/captura.png",
        conectado: "15889623",
        key: "1",
        solicitado: "si"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/captura.png",
        conectado: "15889623",
        key: "2",
        solicitado: "no"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/captura.png",
        conectado: "15889623",
        key: "3",
        solicitado: "no"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/captura.png",
        conectado: "15889623",
        key: "4",
        solicitado: "no"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/captura.png",
        conectado: "15889623",
        key: "6",
        solicitado: "no"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/captura.png",
        conectado: "15889623",
        key: "7",
        solicitado: "no"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/captura.png",
        conectado: "15889623",
        key: "8",
        solicitado: "si"
      }
    ];

    return (
      <View style={styles.container}>
        {usuarios.map(item => (
          <Imagen
            navigation={this.props.navigation}
            key={item.key}
            usuario={item}
          />
        ))}
        {/* modal alert============= */}
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisibleAlert}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 66, 90, 0.5)"
              // opacity: 0.9
            }}
          ></View>

          <View
            style={{
              width: 290,
              backgroundColor: "#fff",
              borderRadius: 15,
              position: "absolute",
              marginTop: "45%",
              marginHorizontal: "10%"
            }}
          >
            <View style={{ marginHorizontal: 20, marginTop: 33 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#00425A",
                  textAlign: "center",
                  textShadowRadius: 2,
                  fontFamily: "PoppinsBold"
                }}
              >
                {this.state.mensajeAlert}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    modalVisibleAlert: !this.state.modalVisibleAlert
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    // padding: 13,
                    color: "#01B8E2",
                    textAlign: "right",
                    fontFamily: "PoppinsRegular",
                    marginTop: 40,
                    marginHorizontal: 20,
                    marginBottom: 20
                  }}
                >
                  {" "}
                  Entendido
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    maxWidth: 450,
    paddingHorizontal: 30,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
