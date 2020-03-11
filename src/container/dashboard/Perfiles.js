import React, { Component, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, AsyncStorage } from "react-native";
import Perfil from "./Perfil";
import PerfilSolicitado from "./PerfilSolicitado"
import Separator from './../../components/Separator';

export default class Perfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersWantedFalse: []
    }
  }

  componentDidMount() {
    let usersWantedFalse = [];
    let users = [];
    let cant = JSON.stringify(
      this.props.navigation.getParam("cantidad", "cantidad")
    );
    cant = cant.replace(/['"]+/g, "");
    if (cant != 'cantidad') {
      users = this.props.navigation.state.params.users;
      usersWantedFalse = this.props.navigation.state.params.users.filter(user => user.wanted == true)
    }
    this.setState({
      users,
      usersWantedFalse
    })
  }

  render() {

    return (
      <View style={styles.container}>
        {this.props.estado ? (
          <FlatList
            data={this.state.usersWantedFalse}
            renderItem={({ item }) => (
              <PerfilSolicitado navigation={this.props.navigation} usuario={item} />
            )}
            keyExtractor={item => item._id}
            horizontal={false}
            ItemSeparatorComponent={Separator}
            ListEmptyComponent={
              <Text
                style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
              >
                No hay usuarios
          </Text>
            }
          />) : (
            <FlatList
              data={this.state.users}
              renderItem={({ item }) => (
                <Perfil navigation={this.props.navigation} usuario={item} />
              )}
              keyExtractor={item => item._id}
              horizontal={false}
              ItemSeparatorComponent={Separator}
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
