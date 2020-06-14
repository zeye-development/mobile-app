import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

const HeaderDashboard = ({ navigation }) => {

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace("Principal");
    } catch (error) {
      console.log('Error Handle Logout: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Text style={styles.icon}>
            {" "}
            <Feather name="settings" size={18} color="#fff" />{" "}
          </Text>
        </TouchableOpacity> 
        
        
        <TouchableOpacity onPress={() => navigation.navigate("BuscarCoincidencia")}>
          <Text style={styles.icon}>
            {" "}
            <FontAwesome name="search" size={18} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>Dashboard</Text>

      <TouchableOpacity onPress={() => handleLogout()}>
        <Text style={styles.icon}>
          {"      "}
          <Ionicons name="ios-log-in" size={20} color="#fff" />{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );

}

export default HeaderDashboard;

const styles = StyleSheet.create({
  container: {
    maxWidth: 450,
    flexDirection: "row",
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
    justifyContent: "center",
    alignContent: "center",
    padding: 8
  },
  text: {
    alignSelf: "center",
    fontSize: 22,
    paddingTop: 20
  }
});
