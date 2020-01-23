import React, { Component } from "react";
import { View, Image, AsyncStorage, StyleSheet } from "react-native";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      let token = await AsyncStorage.getItem("token");

      let toke = token.replace(/['"]+/g, "");
      token = toke;
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
          // console.log(responseJson);
          this.setState({
            data: responseJson
          });

          if (responseJson.data.length != 0) {
            this.setState({ users: responseJson.data });

            // let faces = face[0];
            // faces = faces.replace(/['"]+/g, "");

            cantidad = responseJson.persons_length;

            if (token) {
              this.props.navigation.replace("Dashboard", {
                users: this.state.users,
                cantidad: cantidad
              });
            } else {
              this.props.navigation.replace("InicioSesion");
            }
          } else {
            this.props.navigation.replace("Dashboard");
          }
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {}
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/quantic.jpg")}
          resizeMode="contain"
          style={styles.splash}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    width: "45%",
    height: "45%"
  }
});
