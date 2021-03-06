import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Picker,
  Modal,
  AsyncStorage
} from "react-native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "react-native-datepicker";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: null,
      base64: null,
      estado: true,
      modalVisibleAlert: false,
      mensajeAlert: "",
      isDateTimePickerVisible: false,
      sex: "Male",
      nationality: "VE",
      mainFoto: null,
      birth: "",
      name: "",
      surname: "",
      imagenes: [],
      id: ""
    };
  }

  async componentDidMount() {
    // console.log(this.props.navigation.getParam("mainFoto"));
    let token = await AsyncStorage.getItem("token");
    console.log(token);

    let toke = token.replace(/['"]+/g, "");
    this.setState({ token: toke });
    let perfil = JSON.stringify(
      this.props.navigation.getParam("item", "image")
    );
    console.log(perfil);
    let pfoto = perfil.replace(/['"]+/g, "");
    console.log("fotot", pfoto);

    this.setState({ foto: pfoto });
    let parabase64 = JSON.stringify(
      this.props.navigation.getParam("base", "base64")
    );
    let base64 = parabase64.replace(/['"]+/g, "");
    this.setState({ base64: base64 });
    //   //guardar fotos en cache
    //   //aun no me funciona esto que hago
    //   if (this.props.navigation.getParam("mainFoto")) {
    //     let dataPrincipal = {
    //       foto: pfoto,
    //       base64: base64
    //     };
    //     await AsyncStorage.setItem(
    //       "dataPrincipal",
    //       JSON.stringify(dataPrincipal)
    //     );
    //   }
    //   const cache = await AsyncStorage.getItem("dataPrincipal");
    //   let cache1 = JSON.parse(cache);
    //   this.setState({ mainFoto: cache1, foto: cache1.foto });
    //   console.log(cache1.foto);
  }

  handleUploadPhoto = () => {
    // let { foto, base64 } = this.state;
    console.log(this.state.estado);
    console.log(this.state.foto);
    if (this.state.foto === "image") {
      this.setState({
        modalVisibleAlert: !this.state.modalVisibleAlert,
        mensajeAlert: "EL CAMPO DE IMAGEN ESTA VACIO"
      });
      return;
    }
    if (this.state.name === "") {
      this.setState({
        modalVisibleAlert: !this.state.modalVisibleAlert,
        mensajeAlert: "El campo Nombre no puede estar vacio"
      });
      return;
    }
    if (this.state.surname === "") {
      this.setState({
        modalVisibleAlert: !this.state.modalVisibleAlert,
        mensajeAlert: "El campo Apellido no puede estar vacio"
      });
      return;
    }
    if (this.state.birth === "") {
      this.setState({
        modalVisibleAlert: !this.state.modalVisibleAlert,
        mensajeAlert: "Por favor ingrese una fecha"
      });
      return;
    }
    // let parabase64 = JSON.stringify(
    //   this.props.navigation.getParam("base", "base64")
    // );
    // let base64 = parabase64.replace(/['"]+/g, "");

    // if (this.state.foto != null) {
    fetch("http://189.213.227.211:8443/register-face", {
      method: "POST",
      body: JSON.stringify({
        names: this.state.name,
        surnames: this.state.surname,
        nationality: this.state.nationality,
        dni: this.state.id,
        sex: this.state.sex,
        picture: this.state.base64,
        wanted: this.state.estado,
        birth: this.state.birth
      }),
      headers: {
        "Content-Type": "application/json",
        key: this.state.token
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(this.state.sex);
        console.log("upload succes", response);
        this.setState({
          modalVisibleAlert: true,
          mensajeAlert: "Usuario Registrado Exitosamente"
        });
        setTimeout(() => {
          this.setState({ uri: null });
          this.props.navigation.replace("Loading");
        }, 1000);
      })
      .catch(error => {
        console.log("upload error", error);

        console.log(this.state.estado);

        alert("Upload failed!");
      });
    // }
  };
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace("Captura", { mainFoto: true })
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
        </View>

        {/* ========================================================== */}
        <View style={styles.viewContainer}>
          <TextInput
            style={styles.input1}
            placeholder="Nombres"
            value={this.name}
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <View style={styles.viewContainer}>
          <TextInput
            placeholder="Apellidos"
            value={this.surname}
            onChangeText={surname => this.setState({ surname })}
            style={styles.input1}
          />
        </View>
        <View style={styles.viewContainer}>
          <TextInput
            placeholder="Identidad"
            value={this.id}
            onChangeText={id => this.setState({ id })}
            style={styles.input1}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            color: "black",
            textAlign: "center",
            fontFamily: "PoppinsRegular",
            margin: 5
          }}
        >
          {" "}
          Seleccionar Pais
        </Text>
        <View style={styles.containerpicker}>
          <Picker
            selectedValue={this.state.nationality}
            onValueChange={itemValue =>
              this.setState({ nationality: itemValue })
            }
            style={[styles.picker]}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Venezuela" value="VE" />
            <Picker.Item label="Bolivia" value="BO" />
          </Picker>
        </View>

        <Text
          style={{
            fontSize: 15,
            color: "black",
            textAlign: "center",
            fontFamily: "PoppinsRegular",
            margin: 5
          }}
        >
          {" "}
          Seleccionar Sexo
        </Text>
        <View style={styles.containerpicker}>
          <Picker
            selectedValue={this.state.sex}
            onValueChange={Value => this.setState({ sex: Value })}
            style={[styles.picker]}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Masculino" value="Male" />
            <Picker.Item label="Femenino" value="Female" />
          </Picker>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: "black",
            textAlign: "center",
            fontFamily: "PoppinsRegular",
            margin: 5
          }}
        >
          {" "}
          Fecha de Nacimiento
        </Text>
        <DatePicker
          style={{ width: "100%", height: 40, marginTop: 6 }}
          date={this.state.birth}
          mode="date"
          placeholder="Fecha de Nacimiento"
          format="DD-MM-YYYY"
          minDate="01-05-1920"
          maxDate="01-10-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={date => {
            this.setState({ birth: date });
          }}
        />
        <View style={styles.viewContainerCheck}>
          <TouchableOpacity
            style={{ width: 45, height: 45, marginTop: 15, marginRight: -10 }}
            onPress={() => {
              this.setState({ estado: !this.state.estado });
            }}
          >
            {this.state.estado ? (
              <Ionicons name="md-checkbox-outline" size={25} color="#00425A" />
            ) : (
              <Ionicons name="md-square-outline" size={25} color="#00425A" />
            )}
          </TouchableOpacity>
          <Text
            style={{
              color: "#00425A",
              fontSize: 14,
              marginLeft: -10,
              fontFamily: "PoppinsSemiBold"
            }}
          >
            Añadir a solicitados
          </Text>
        </View>

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
  },
  imagenesSubir: {
    width: 50,
    marginHorizontal: 3,
    height: 50,
    backgroundColor: "#EBF2F4",
    alignItems: "center",
    justifyContent: "center"
  }
});
