import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styled from 'styled-components/native';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: null,
      base64: null,
      modalVisibleAlert: false,
      mensajeAlert: "",
      mainFoto: null,
      modalLoading:false,
      id: "",
      token: "",
      images: []
    };
  }
  async componentDidMount() {
    console.log(this.props.navigation.getParam("mainFoto"));
    let token = await AsyncStorage.getItem("token");

    let { id: _id, images } = this.props;
    // console.log(this.props.navigation.state.params.images)
    console.log('id: camera', _id)

    let toke = token.replace(/['"]+/g, "");
    this.setState({ 
      token: toke,
      id: _id,
      images
    });
    
    let perfil = JSON.stringify(this.props.navigation.getParam("item", "image"));
    console.log(perfil);
    let pfoto = perfil.replace(/['"]+/g, "");
    console.log("fotot", pfoto);

    this.setState({ foto: pfoto });
    let parabase64 = JSON.stringify(this.props.navigation.getParam("base", "base64"));
    let base64 = parabase64.replace(/['"]+/g, "");
    this.setState({ base64: base64 });
  }

  handleUploadPhoto = () => {
    
    console.log('A')
    console.log(this.state.foto)
    if (this.state.foto != 'image') {
    try{
    let { foto, base64 } = this.state;
    console.log(this.state.foto);

    if (this.state.foto != null) {
    console.log('venezuela')
    console.log(this.props.id)
    this.setState({modalLoading:true})
    fetch("http://189.213.227.211:8443/person-query", {
      method: "PUT",
      body: JSON.stringify({
        picture: this.state.base64,
        dni: this.props.id
      }),
      headers: {
        "Content-Type": "application/json",
        dni: this.props.id,
        key:this.state.token,
      }
    })    
      .then(response => response.json())
      .then(response => {
        console.log("upload succes", response);
        this.setState({
          modalVisibleAlert: true,
          mensajeAlert: "Foto añadida a la galeria",
          modalLoading:true
        });
        setTimeout(() => {
          this.setState({ uri: null });
          this.props.navigation.replace("Loading");
        }, 1000);
      })
      .catch(error => {
        console.log("upload error picture:", error);

        this.setState({
          modalVisibleAlert: true,
          mensajeAlert: "Ocurrió un error al añadir la foto",
          modalLoading:true
        });        
        // alert("Upload failed!");
      });
    }}
    catch{
      this.setState({
        modalVisibleAlert: true,
        mensajeAlert: "Ocurrió un error al añadir la foto",
        modalLoading:true})
    }}  
  else{
     this.setState({
        modalVisibleAlert: true,
        mensajeAlert: "El campo de la Imagen no puede estar vacio"
      });
  }
  };

  render() {
    return (
      <Container>
        <Main
          style={{
            flexDirection: "row",
            width: "100%",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace("Captura", { id: this.state.id, images: this.state.images, mainFoto: true })
            }
            style={{
              width: 120,
              height: 120,
              backgroundColor: "#EBF2F4",
              borderRadius: 100,
              position: "absolute"
            }}
          >
            <Image
              source={{ uri: this.state.foto }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: "#01B8D2",
              height: "45%",
              width: "16%",
              marginLeft: "30%",
              marginTop: "20%",
              borderRadius: 30,
              alignItems: "center"
            }}
          >
            <View style={{ marginTop: "20%" }}>
              <Ionicons name="md-camera" size={25} color="white" />
            </View>
          </View>
        </Main>

        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.styleButtom}
        >
          <TouchableOpacity onPress={this.handleUploadPhoto}>
            <Text style={styles.inputButtom}>
              <Ionicons name="md-person-add" size={16} color="#fff" /> Añadir{" "}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* modal aLert ================ */}
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
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalLoading}
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
              position: "absolute",
              top: "45%",
              left: "45%"
            }}
          >
            {this.state.modalLoading ? (
              <ActivityIndicator size={30} color="#fff" />
            ) : null}
          </View>
        </Modal>
      </Container>
    );
  }
}

const Container = styled.View`
  margin-bottom: 10px;
  align-items: stretch;
  max-width: 450px;
  padding: 0 30px;
`;

const Main = styled.View`
  flex-direction: row;
  background-color: #fff;
  width: 100%!important;
  height: 100%!important;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;  
`;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 450,
    paddingHorizontal: 30
  },
  input: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33,
    fontFamily: "PoppinsRegular"
  },
  input1: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginRight: 13,
    fontFamily: "PoppinsRegular"
  },
  inputButtom: {
    fontSize: 16,
    padding: 13,
    color: "#fff",
    textAlign: "center",
    fontFamily: "PoppinsRegular"
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5
  },
  viewContainerGrup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 15
  },
  viewContainerInput: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    width: 140
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "stretch",
    backgroundColor: "#0097CD"
  },
  viewContainerCheck: {
    flexDirection: "row",
    padding: 13,
    color: "#EBF2F4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
    marginBottom: 15
  },
  containerpicker: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginBottom: 5
  },
  picker: {
    width: "100%",
    height: 50,
    marginLeft: "2%",
    color: "black",
    alignItems: "center"
  }
});
