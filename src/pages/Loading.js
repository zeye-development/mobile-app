import React, { Component } from "react";
<<<<<<< HEAD
import { Image, AsyncStorage, StyleSheet } from "react-native";
=======
import { connect } from 'react-redux';
import { View, Image, AsyncStorage, StyleSheet } from "react-native";
>>>>>>> aac0f07ea49a5baa2d83977b726299bc72525673
import styled from 'styled-components/native';

import { saveUsersToStoreAction } from './../redux/userDuck';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem("token");

    if (!token) this.props.navigation.replace("Principal");

    try {
      token = token.replace(/['"]+/g, "");
      fetch("http://189.213.227.211:8443/known_person", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          key: token,
          all: "yes"
        }
      })
        .then(response => response.json())
        .then(responseJson => {

          if (responseJson.status == 200 && responseJson.data.length != 0) {
            if (token) {
              this.props.saveUsersToStoreAction(responseJson.data)

              this.props.navigation.replace("Dashboard", {
                users: responseJson.data,
                cantidad: responseJson.persons_length
              });
            } else {
              this.props.navigation.replace("InicioSesion");
            }
          } else {
            this.props.navigation.replace("Dashboard");
          }
        })
        .catch(error => console.error('Loading Error: ', error));

    } catch (error) {

    }
  }

  render() {
    return (
      <Container>
        <Image
          source={require("../../assets/quantic.jpg")}
          resizeMode="contain"
          style={styles.splash}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = ({
  saveUsersToStoreAction
})

export default connect(null, mapDispatchToProps)(Loading);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  splash: {
    width: "45%",
    height: "45%"
  }
});
