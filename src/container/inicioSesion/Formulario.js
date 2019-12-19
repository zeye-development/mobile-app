import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { validatorEmail } from "../../helpers/validatorEmail";
import md5 from 'md5';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      email:null,
      pass:null
    };
  }


  async login(){

    if (!this.state.email){
      Alert.alert('Error','El correo es Requerido para iniciar Sesion')
      return;
    }
    if (!this.state.pass){
      Alert.alert('Error','La contraseña es requerida para iniciar Sesion')
      return
    }
    console.log(this.state.email)
    console.log(this.state.pass)

    try {
      let response = await fetch('http://189.213.227.211:8080/login',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'mimeType': 'application/json',
        },
        body: JSON.stringify({
          email:(this.state.email),
          password:md5(this.state.pass),
        }),
      });

      
      let responseJson = await response.json();
      console.log(responseJson)

      const token= await JSON.stringify(responseJson.token);
      if (responseJson.status === 200){
        await AsyncStorage.setItem('token', token);
        this.props.navigation.replace('Dashboard')

      } 
      else {
        Alert.alert('Error','El Correo o la contraseña no son correctos');
      }
    
      
    } catch (error) {
      Alert.alert("Error","Usted no dispone de una conexion a internet");
    }


    
  }


    render() {
 
  // // validarEmail = event => {
  //   // console.log(event);
  //   const email = event.nativeEvent.text;
  //   const emailLimpio = email.trim();
  //   let caracteresEmail = event.nativeEvent.eventCount;
  //   if (caracteresEmail >= 13) {
  //     if (validatorEmail(emailLimpio)) {
  //       console.log(getEmail);
  //       setEmail({ ...getEmail, email: emailLimpio, validator: true });
  //     } else if (!validatorEmail(emailLimpio)) {
  //       setEmail({ ...getEmail, validator: false });
  //     }
  //   }
  // };
  // let [getPass, setPass] = useState({
  //   Pass: "",
  //   validator: false
  // });

  // validarPass = event => {
  //   const pass = event.nativeEvent.text;
  //   let caracteresPass = event.nativeEvent.eventCount;
  //   const passLimpio = pass.trim();
  //   if (caracteresPass >= 5) {
  //     // console.log(getPass);
  //     setPass({ ...getPass, Pass: passLimpio, validator: true });
  //   } else if (getPass.caracteres < 6) {
  //     setPass({ ...getPass, validator: false });
  //   }
  // };
  // const [getError, setError] = useState(false);
  // enviarRequest = () => {
  //   // console.log(getEmail.validator);
  //   // console.log(getPass.validator);
  //   if (getEmail.validator && getPass.validator) {
  //     props.navigation.navigate("Dashboard");
  //   } else {
  //     setError(true);
  //     setTimeout(() => {
  //       setError(false);
  //     }, 3000);
  //   }
  // };
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input}
          
          placeholder="User"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}     
        />
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          
          secureTextEntry={true}
          placeholder="Password"
          value={this.state.pass}
          onChangeText={pass => this.setState({ pass })}   
          style={styles.input}
        />
      </View>
      
      <View style={styles.styleButtom}>
        <TouchableOpacity onPress={()=>{this.login(this.state.email,this.state.pass)}}>
          <Text style={styles.inputButtom}>
            Iniciar Sesion{" "}
            <Ionicons name="md-arrow-forward" size={18} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    marginBottom: 20,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  input: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33,
    borderWidth: 2,
    borderColor: "transparent"
  },
  inputButtom: {
    fontSize: 18,
    padding: 13,
    color: "#fff",
    textAlign: "center"
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "stretch",
    backgroundColor: "#0097CD"
  },
  usuario: {
    padding: 13,
    backgroundColor: "red",
    textAlign: "center",
    color: "#fff",
    borderRadius: 15,
    marginTop: 5
  }
});
