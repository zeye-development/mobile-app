import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: null
    };
  }

  async logOut() {
    try {
      await AsyncStorage.clear();
      this.props.navigation.replace("Principal");
    } catch (error) {}
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={styles.icon}>
              {" "}
              <Feather name="settings" size={20} color="#fff" />{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Captura")}
          >
            <Text style={styles.icon}>
              {" "}
              <FontAwesome name="camera" size={20} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Dashboard</Text>

        <TouchableOpacity
          onPress={() => {
            this.logOut();
          }}
        >
          <Text style={styles.icon}>
            {"      "}
            <Ionicons name="ios-log-in" size={20} color="#fff" />{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#0097CD',
    maxWidth: 350,
    flexDirection: "row",
    // alignItems: 'flex-start',
    justifyContent: "space-between",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10
  },
  headerText: {
    color: "#fff",
    fontSize: 16
  },
  icon: {
    padding: 6
  }
});
