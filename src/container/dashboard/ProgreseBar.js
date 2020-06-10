import React from "react";
import { useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  ProgressBarAndroid,
  Text,
  TouchableOpacity
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const ProgreseBar = ({ navigation }) => {
  const { users } = useSelector((state) => state.user);
  const maxUsers = 100;
  const percentage = users.length / maxUsers;

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#00DFAA"
          progress={percentage}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: "PoppinsSemiBold"
          }}
        >
          {" "}
          <Entypo name="users" size={18} color="#fff" /> 
          { users.length && users.length } de { maxUsers } Usuarios
        </Text>
      </View>
      <View style={styles.styleButtom}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NuevoUsuario")}
        >
          <Text style={styles.inputButtom}>
            <Ionicons name="md-person-add" size={18} color="#0097CD" /> Añadir
            Usuario{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default ProgreseBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 450
  },
  viewContainer: {
    paddingBottom: 20
  },
  inputButtom: {
    fontSize: 16,
    padding: 13,
    color: "#0097CD",
    textAlign: "center",
    fontFamily: "PoppinsRegular"
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 15,
    alignItems: "stretch",
    backgroundColor: "#fff"
  }
});
