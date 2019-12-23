import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto:false,
      base64:this.state,
      estado:true
    };
  }
  

  handleUploadPhoto = () => {
    let parabase64=JSON.stringify(this.props.navigation.getParam('base','base64'))
    let base64=parabase64.replace(/['"]+/g, '')
    fetch("http://189.213.227.211:8080/person", {
      method: "POST",
      body:JSON.stringify({
      name:(this.state.name),
      surname:(this.state.surname),
      pais:(this.state.pais),
      id:(this.state.id),
      sex:(this.state.sex),
      picture:(base64),
      estado:(this.state.estado)
       }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log("upload succes", response);
        alert("Upload success!");
        this.setState({ uri: null });
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => {
        console.log("upload error", error);
        console.log(base64)
        console.log(this.state.estado)
        
        alert("Upload failed!");
        this.props.navigation.navigate('Dashboard')
      });
  };
  render() {
    
    let perfil=JSON.stringify(this.props.navigation.getParam('item','image'))
    let foto=perfil.replace(/['"]+/g, '')
    
  return (
    
    <View style={styles.container}>
      <View style={{width:'100%',height:100,justifyContent:'center',alignItems:'center',marginTop:20,marginBottom:20}}>
     
      <TouchableOpacity 
     onPress={() => this.props.navigation.navigate("Captura")}
     style={{width:120,height:120,backgroundColor:'#abc',borderRadius:100}}>  
    <Image source={{uri:foto}} style={{width:120,height:120,borderRadius: 100,}} />
      </TouchableOpacity>
         </View>
      <View style={styles.viewContainerGrup}>
        <View style={styles.viewContainerInput}>
          <TextInput style={styles.input1} 
          placeholder="Nombre" 
          value={this.name}
          onChangeText={name => this.setState({ name})}/>
        </View>
        <View style={styles.viewContainerInput}>
          <TextInput 
          placeholder="Apellido"
          value={this.surname}
          onChangeText={surname => this.setState({ surname})}
           style={styles.input1} />
        </View>
      </View>
      <View style={styles.viewContainer}>
        <TextInput 
        placeholder="Pais" 
        value={this.pais}
         onChangeText={pais => this.setState({pais})}
        style={styles.input} />
      </View>

      <View style={styles.viewContainer}>
        <TextInput 
        placeholder="Identidad" 
        value={this.id}
        onChangeText={id => this.setState({ id})}
        style={styles.input} />
      </View>

      <View style={styles.viewContainer}>
        <TextInput 
        placeholder="Sexo" 
        value={this.sex}
        onChangeText={sex => this.setState({sex})}
        style={styles.input} />
      </View>
      <View style={styles.viewContainerCheck}>
       
        <TouchableOpacity 
        style={{width:35,height:35, marginTop:10}}
        onPress={()=>{this.setState({estado:!this.state.estado})}}> 
        {this.state.estado?
           <Ionicons name="md-checkbox-outline" size={25} color="#00425A" />:
           <Ionicons name="md-square-outline" size={25} color="#00425A" />
           }
          </TouchableOpacity>
          <Text style={{ color: "#00425A", fontSize: 16, marginLeft:-10 }}>Anadir a solicitados
        </Text>
      </View>

      <View style={styles.styleButtom}>
        <TouchableOpacity onPress={this.handleUploadPhoto}>
          <Text style={styles.inputButtom}>
            <Ionicons name="md-person-add" size={20} color="#fff" /> Anadir{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}}

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
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33
  },
  input1: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginRight: 13
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
    flexDirection:'row',
    padding: 13,
    color: "#EBF2F4",
    alignItems: "center",
    justifyContent:'center',
    marginTop: 7,
    marginBottom: 15
  }
});
