import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: null,
      click_menu: false,
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
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("PanelAdmin")}
            onPress={() => {
              this.setState({
                click_menu: !this.state.click_menu,
              });
            }}
          >
            <Text style={styles.icon}>
              {" "}
              <Feather name="settings" size={18} color="#fff" />{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("BuscarCoincidencia")}
          >
            <Text style={styles.icon}>
              {" "}
              <FontAwesome name="search" size={18} color="#fff" />
            </Text>
          </TouchableOpacity>
          {/* //==========car float================= */}
          {this.state.click_menu ? (
            <View style={styles.containerOptionButtom}>
              <View style={styles.containerButtom}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("PanelAdmin")}
                >
                  <Text style={styles.optionButtom}>Panel Admin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Events")}
                >
                  <Text style={styles.optionButtom}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Deployments")}
                >
                  <Text style={styles.optionButtom}>Deployments</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          {/* //==========car float================= */}
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
    maxWidth: 450,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
  },
  icon: {
    padding: 6,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 8,
  },
  text: {
    alignSelf: "center",
    fontSize: 22,
    paddingTop: 20,
  },

  optionButtom: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 7,
    paddingVertical: 7,
    fontFamily: "PoppinsRegular",
    fontSize: 12,
  },
  containerOptionButtom: {
    position: "absolute",
    left: 15,
    top: 40,
  },
  containerButtom: {
    top: -10,
    height: "auto",
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
