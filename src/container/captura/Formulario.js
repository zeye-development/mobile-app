import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from "expo-permissions";
import { StyleSheet, Text, View, TouchableOpacity, Image,Modal,Button,Platform } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";


export default class Formulario extends React.Component{
  state = {
    modalVisible:false,
    hasCameraPermission: false,
    // type: Camera.Constants.Type.front,
    type: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.on,
    autoFocus: Camera.Constants.AutoFocus.on,
    zoom: 0,
    whiteBalance: Camera.Constants.WhiteBalance.auto,
    focusDepth: 0,
    ratio: "4:3",
  
    image: null,}
    async componentDidMount() {
      try {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
  
        this.setState({ hasCameraPermission: status === "granted" });
  
        if (status !== "granted") {
          alert("Hey! You might want to enable Camera in your phone settings.");
        }
      } catch (err) {
        console.log("err", err);
      }
  
      if (Platform.OS === "android") {
        try {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
          this.setState({ hasCameraPermission: status === "granted" });
  
          if (status !== "granted") {
            alert("Hey! You might want to enable Camera in your phone settings.");
          }
        } catch (err) {
          console.log("err", err);
        }
      }
    }
    
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
  
    _pickImage = async () => {
      const options = { quality: 0.1, base64: true };
      let result = await ImagePicker.launchImageLibraryAsync(options);
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ base64: result.base64 });
        this.setState({ image: result.uri});
      }
    };
  
    
  
   
        
    
    handleUploadPhoto = () => {
      fetch("http://189.213.227.211:8080/person", {
        method: "POST",
        body:JSON.stringify({
        picture:(this.state.base64),
         }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          console.log("upload succes", response);
          alert("Upload success!");
          this.setState({ uri: null });
        })
        .catch(error => {
          console.log("upload error", error);
          alert("Upload failed!");
        });
    };
    _takePictureButtonPressed = async () => {
      if (this._cameraInstance) {
        // console.log('')
  
        //const options = { quality: 0.5, base64: true };
        const options = { quality: 0.1, base64: true };
        
        let result = await this._cameraInstance.takePictureAsync(options);
        
        console.log(result);
  
      if (!result.cancelled) {
        this.setState({ base64: result.base64 });
        this.setState({ image: result.uri});
        this.setState({modalVisible:!this.state.modalVisible})
      }
        
    }
      };
   
  
  render(){
    let { image } = this.state;
    

    const {
      
      type,
      flashMode,
      zoom,
      whiteBalance,
      focusDepth,
      photo
    } = this.state;

    
 
  return (
    <View style={styles.container}>
     
       <View style={styles.viewContainer}>
        <Image
          style={{ width: 230, height: 230, borderRadius:20, position: 'absolute'}}
          source={{ uri: image }}
        />
       <View style={styles.cuadro}></View>
       
      </View>
      <View style={styles.styleButtom}>
        <TouchableOpacity  onPress={()=>{this.setState({modalVisible:!this.state.modalVisible})}}>
          <Text style={styles.inputButtom}>
            Capturar <Ionicons name="ios-camera" size={20} color="#fff" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.styleButtom1}>
        <TouchableOpacity  onPress={this._pickImage}>
          <Text style={styles.inputButtom1}>
            Cargar <Ionicons name="md-cloud-upload" size={20} color="#00425A" /></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.styleButtom}>
        <TouchableOpacity onPress={this.handleUploadPhoto}>
          <Text style={styles.inputButtom}>
            <Feather name="download" size={20} color="#fff" /> Guardar</Text>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        >
        
        <View style={styles.containermodal}>
        <Camera
          style={styles.camera}
          ref={ref => (this._cameraInstance = ref)}
          type={type}
          
          zoom={zoom}
          whiteBalance={whiteBalance}
          focusDepth={focusDepth}
        />
        
        <View style={styles.cuadro2}></View>
        <View style={styles.controls}>
          {!photo && (
            <Button
              title="Take Picture"
              color="#0097CD"
              onPress={this._takePictureButtonPressed}
            />
          )}
          {/* //previo */}
          {photo && <Image style={styles.photo} source={photo} />}
        </View>
      </View>
        </Modal>
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
  containermodal: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
    

  },

  viewContainer: {
    marginTop: 10,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 225,
    height: 225,
    borderRadius: 25,
    backgroundColor:"#CCE3EB" 
  },
  cuadro:{
    width:'80%',
    height:'80%',
    borderColor:'white',
    borderWidth:7,
    
    position:'absolute'

  },
  cuadro2:{
    marginLeft:'10%',
    marginTop:'30%',
    width:'80%',
    height:'60%',
    borderColor:'white',
    borderWidth:7,
    
    position:'absolute'

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
  },
  camera: {
   height:'100%',
   width:'130%'
  },

  controls: {
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },

  photo: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 0,
    bottom: 0,
    top: 0
  }
});
