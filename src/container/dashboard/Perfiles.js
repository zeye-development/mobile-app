import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, AsyncStorage } from "react-native";
import Perfil from "./Perfil";
import PerfilSolicitado from "./PerfilSolicitado"

export default class Perfiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}}


  async componentDidMount () {
    let token= await AsyncStorage.getItem('token');
    console.log(token)
  
    let toke = token.replace(/['"]+/g, "");
    this.setState({token:toke})
    fetch('http://189.213.227.211:8443/known_person', {
         method: 'GET', 
         headers: {
          "Content-Type": "application/json",
          key: this.state.token,
          all:'yes'
        },
    
        })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
       
         responseJson.data.forEach(element =>this.setState({id:element._id}))
         console.log(this.state.id)
      })
      .catch((error) => {
         console.error(error);
      });
    }
  separador = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#f2f2f2",
          marginVertical: 10
        }}
      ></View>
    );
  };
  render(){
    const usuarios = [
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "0"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "1"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "2"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "3"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "4"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "6"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "7"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "8"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "9"
      },
      {
        nombre: "Jhon Doe",
        edad: "28 Years",
        img: "../../../assets/perfil.png",
        conectado: "hace 4 min",
        key: "10"
      }
    ];
  return (
    <View style={styles.container}>
    {this.True?(
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <PerfilSolicitado navigation={props.navigation} usuario={item} />
        )}
        keyExtractor={item => item.key}
        horizontal={false}
        ItemSeparatorComponent={separador}
        ListEmptyComponent={
          <Text
            style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
          >
            No hay usuarios
          </Text>
        }
      />):(
        <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <Perfil navigation={this.props.navigation} usuario={item} />
        )}
        keyExtractor={item => item.key}
        horizontal={false}
        ItemSeparatorComponent={this.separador}
        ListEmptyComponent={
          <Text
            style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
          >
            No hay usuarios
          </Text>
        }
      />
      )}
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 10
  },
  containerPerfil: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    justifyContent: "center",
    borderRadius: 100
  },
  textColor: {
    color: "#E1868F"
  }
});
