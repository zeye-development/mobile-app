import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Picker, 
  Modal
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from 'react-native-datepicker'


export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: null,
      base64: null,
      estado: true,
      modalVisibleAlert: false,
      mensajeAlert: "",
      isDateTimePickerVisible:false,
      sex:'Male',
      nationality:'VE'
    };
  }

  handleUploadPhoto = () => {
    // let { foto, base64 } = this.state;

    if (this.state.foto === null || this.state.base64 === null) {
      this.setState({
        modalVisibleAlert: !this.state.modalVisibleAlert,
        mensajeAlert: "EL CAMPO DE IMAGEN ESTA VACIO"
      });
      return;
    }
    let parabase64 = JSON.stringify(
      this.props.navigation.getParam("base", "base64")
    );
    let base64 = parabase64.replace(/['"]+/g, "");

    fetch("http://189.213.227.211:8080/register-face", {
      method: "POST",
      body: JSON.stringify({
        names: this.state.name,
        surnames: this.state.surname,
        nationality:(this.state.nationality),
        dni: this.state.id,
        sex:this.state.sex,
        picture: base64,
        wanted: this.state.estado,
        birth: this.state.birth
      
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(this.state.sex);
        console.log(this.state.sex)
        console.log("upload succes", response);
        alert("Upload success!");
        this.setState({ uri: null });
        this.props.navigation.navigate("Dashboard");
      })
      .catch(error => {
        console.log("upload error", error);

        console.log(this.state.estado);

        alert("Upload failed!");
        this.props.navigation.navigate("Dashboard");
      });
 
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
    let perfil = JSON.stringify(
      this.props.navigation.getParam("item", "image")
    );
    let foto = perfil.replace(/['"]+/g, "");
   

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection:'row',
            width: "100%",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
            
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Captura")}
            style={{
              width: 120,
              height: 120,
              backgroundColor: "#EBF2F4",
              borderRadius: 100,
              position:'absolute'
            }}
          >
            <Image
            
            source={{ uri: foto }}
            style={{ width: 120, height: 120, borderRadius: 100 }}/>

            
                  
          </TouchableOpacity>
         
          <View style={{backgroundColor:'#01B8D2', height:'45%', width:'16%',
          marginLeft:'30%',marginTop:'20%',borderRadius:30,alignItems:'center'}}>
          <View style={{marginTop:'20%'}}> 
         <Ionicons name="md-camera" size={25} color="white"  /></View> 
          </View>
          
        </View>
        
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
            style={styles.input}
          />
        </View>
          <Text style={{fontSize: 15,color: "black",
          textAlign: "center",fontFamily: "PoppinsRegular",margin:5,}}> Selecionar Pais</Text>
          <View style={styles.containerpicker}>
        <Picker 
        selectedValue={this.state.nationality}
        onValueChange={(itemValue) => this.setState({nationality: itemValue})}
        style={[styles.picker]} itemStyle={styles.pickerItem}>
          <Picker.Item label="Venezuela" value="VE" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="Brasil" value="BR" />
          <Picker.Item label="Estados Unidos" value="US" />
        </Picker>
        
      </View>
      

        <Text style={{fontSize: 15,color: "black",
          textAlign: "center",fontFamily: "PoppinsRegular",margin:5,}}> Selecionar Sexo</Text>
          <View style={styles.containerpicker}>
        <Picker 
        selectedValue={this.state.sex}
        onValueChange={(Value) => this.setState({sex: Value})}
        style={[styles.picker]} itemStyle={styles.pickerItem}>
          <Picker.Item label="Masculino" value="Male" />
          <Picker.Item label="Femenino" value="Female" />
          
        </Picker>
        
      </View>
      <Text style={{fontSize: 15,color: "black",
          textAlign: "center",fontFamily: "PoppinsRegular",margin:5,}}> Fecha de Nacimiento</Text>
      <DatePicker
        style={{width: '100%', height:40,marginTop:6}}
        date={this.state.birth}
        mode="date"
        placeholder="Fecha de Nacimiento"
        format="DD-MM-YYYY"
        minDate="01-05-1920"
        maxDate="01-10-2025"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
     
        
        onDateChange={(date) => {this.setState({birth: date})}}
      />
        <View style={styles.viewContainerCheck}>
          <TouchableOpacity
            style={{ width: 45, height: 45, marginTop: 15, marginRight:-10 }}
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
            Anadir a solicitados
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
              <Ionicons name="md-person-add" size={16} color="#fff" /> Anadir{" "}
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
                  this.setState({ modalVisibleAlert: !this.state.modalVisibleAlert });
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
    // flex: 1,
    // alignItems: 'center',
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:15,
    backgroundColor: '#EBF2F4',
    marginBottom:5,
  },
  
  picker: {
    width: '100%',
    height: 50,
    marginLeft:'2%',
    color: 'black',
    
    
    alignItems:'center'
  },
  
  
  
 
});
