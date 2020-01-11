import React from "react";
import {
  StyleSheet,
  View,
  ProgressBarAndroid,
  Text,
  TouchableOpacity
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

export default class ProgreseBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cant:0
    };
  }
  componentDidMount=()=>{
    let cant=JSON.stringify(this.props.navigation.getParam( "cant", "cantidad"))
    cant = cant.replace(/['"]+/g, "");
    if(cant!='cantidad')
    this.setState({cant:cant})
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#00DFAA"
          progress={1}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{ color: "#fff", fontSize: 16, fontFamily: "PoppinsSemiBold" }}
        >
          {" "}
          <Entypo name="users" size={18} color="#fff" />{" "} {this.state.cant} de 1000 Usuarios
        </Text>
      </View>
      <View style={styles.styleButtom}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("NuevoUsuario")}
        >
          <Text style={styles.inputButtom}>
            <Ionicons name="md-person-add" size={18} color="#0097CD" /> Anadir
            Usuario{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    marginTop: 18,
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350
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
