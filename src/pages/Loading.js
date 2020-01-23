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

          // console.log("AAAAAAAAAAAAAAAA");
          if (responseJson.data.length != 0) {
            this.setState({ users: responseJson.data });

            responseJson.data.forEach(element =>
              this.setState({ image: element.images })
            );
            // console.log(this.state.image);
            let face = this.state.image;
            let faces = face[0];
            faces = faces.replace(/['"]+/g, "");
            console.log(faces);
            const url = "http://189.213.227.211:8443/file=" + faces;
            this.setState({ url: url });

            cantidad = responseJson.persons_length;
            if (token) {
              this.setState({ len: true });
              this.props.navigation.replace("Dashboard", {
                item: this.state.url,
                users: this.state.users,
                len: this.state.len,
                cantidad: cantidad
              });
            } else {
              this.props.navigation.replace("InicioSesion");
            }
          } else {
            this.setState({ len: false });

            this.props.navigation.replace("Dashboard", { len: this.state.len });
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
