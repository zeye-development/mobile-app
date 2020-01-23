import React, { Component, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, AsyncStorage } from "react-native";
import Perfil from "./Perfil";
import PerfilSolicitado from "./PerfilSolicitado"

export default class Perfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersWantedFalse: []
    }
    // console.log('Profiles')
    // console.log(props)
  }
  
 componentDidMount=()=>{
  let pface=JSON.stringify(this.props.navigation.getParam( "item", "url"))
  let face = pface.replace(/['"]+/g, "");
  
  this.setState({url:face})
  let name=JSON.stringify(this.props.navigation.getParam( "name", "names"))
     name = name.replace(/['"]+/g, "");
      this.setState({name:name})
      console.log(name)
      let surname=JSON.stringify(this.props.navigation.getParam( "surname", "surname"))
      surname = surname.replace(/['"]+/g, "");
      this.setState({surname:surname})
      console.log(surname)
      let id=JSON.stringify(this.props.navigation.getParam( "id", "id"))
      id = id.replace(/['"]+/g, "");
      this.setState({id:id})
      console.log(surname)

      let usersWantedFalse= [];
      let users = [];
      if(this.props.navigation.state.params.users) {
        users = this.props.navigation.state.params.users;
        usersWantedFalse = this.props.navigation.state.params.users.filter(user => user.wanted == true )
      }

      this.setState({
        users,
        usersWantedFalse
      })

      }
  separador = () =>
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#f2f2f2",
        marginVertical: 10
      }}
    ></View>

  render(){

  return (
    <View style={styles.container}>
    {this.props.estado?(
      <FlatList
        data={this.state.usersWantedFalse}
        renderItem={({ item }) => (
          <PerfilSolicitado navigation={this.props.navigation} usuario={item} />
        )}
        keyExtractor={item => item._id}
        horizontal={false}
        ItemSeparatorComponent={this.separador}
        ListEmptyComponent={
          <Text
            style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
          >
            No hay usuarios
          </Text>
        }
      />):(
        <FlatList
        data={this.state.users}
        renderItem={({ item }) => (
          <Perfil navigation={this.props.navigation} usuario={item} />
        )}
        keyExtractor={item => item._id}
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
