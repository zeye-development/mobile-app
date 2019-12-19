import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default class Formulario extends React.Component{
  state = {
    image: null,}

    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
  
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };
  render(){
    let { image } = this.state;
 
  return (
    <View style={styles.container}>
       <View style={styles.viewContainer}>
        <Image
          style={{ width: 220, height: 220, borderRadius:20, backgroundColor:'#aaa'}}
          source={{ uri: image }}
        />
      </View>
      <View style={styles.styleButtom}>
        <TouchableOpacity>
          <Text style={styles.inputButtom}>
            Capturar <Ionicons name="ios-camera" size={20} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.styleButtom1}>
        <TouchableOpacity  onPress={this._pickImage}>
          <Text style={styles.inputButtom1}>
            Cargar <Ionicons name="md-cloud-upload" size={20} color="#00425A" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.styleButtom}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.inputButtom}>
            <Feather name="download" size={20} color="#fff" /> Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30,
   alignItems:'center',

  },
  viewContainer: {
    marginTop: 10,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 225,
    height: 225,
    borderRadius: 25
  },
  inputButtom: {
    fontSize: 18,
    padding: 13,
    color: "#fff"
  },
  styleButtom: {
    borderRadius: 15,
    marginTop:30,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: "#0097CD",
    paddingHorizontal:70
  },
  inputButtom1: {
    fontSize: 18,
    padding: 13,
    color: "#00425A"
  },
  styleButtom1: {
    borderRadius: 15,
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "#CCE3EB",
    marginBottom: 45,
    paddingHorizontal:80
  }
});
