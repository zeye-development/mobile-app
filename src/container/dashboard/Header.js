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
              <Feather name="settings" size={18} color="#fff" />{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("BuscarCoincidencia")}
          >
            <Text style={styles.icon}>
              {" "}
              <FontAwesome name="camera" size={18} color="#fff" />
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
            <Ionicons name="ios-log-in" size={18} color="#fff" />{" "}
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
    fontSize: 14,
    fontFamily: "PoppinsSemiBold"
  },
  icon: {
    padding: 6
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    
    padding: 8,
  },
  
 
  text: {
    alignSelf: 'center',
    fontSize: 22,
    paddingTop: 20,
  },
});
