import * as React from "react";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  Platform,
  Alert
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      base64: null,
      modalVisible: false,
      hasCameraPermission: false,
      // type: Camera.Constants.Type.front,
      type: Camera.Constants.Type.back,
      flashMode: Camera.Constants.FlashMode.on,
      autoFocus: Camera.Constants.AutoFocus.on,
      zoom: 0,
      whiteBalance: Camera.Constants.WhiteBalance.auto,
      focusDepth: 0,
      ratio: "4:3",
      estadocamara:true
    };
  }

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
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    const options = { quality: 0.1, base64: true,allowsEditing:true };
    let result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.cancelled) {
      this.setState({ base64: result.base64 });
      this.setState({ image: result.uri });
    }
  };

  _takePictureButtonPressed = async () => {
    if (this._cameraInstance) {
      // console.log('')

      //const options = { quality: 0.5, base64: true };
      const options = { quality: 0.1, base64: true };

      let result = await this._cameraInstance.takePictureAsync(options);

      if (!result.cancelled) {
        this.setState({ base64: result.base64 });
        this.setState({ image: result.uri });
        this.setState({ modalVisible: !this.state.modalVisible });
      }
    }
  };
  handleUploadPhoto = () => {
    fetch("http://189.213.227.211:8080/person-query", {
      method: "POST",
      body: JSON.stringify({
        // names:(this.state.name),
        // surnames:(this.state.surname),
        // // // // pais:(this.state.pais),
        // dni:(this.state.id),
        // sex:(this.state.sex),
        picture: this.state.base64
        // wanted:(this.state.estado)
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log("upload succes", response);
        
        this.setState({ uri: null });
        response.people.forEach(element =>this.setState({id:element._id}))
            response.people.forEach(element =>this.setState({face:element.current_face}))
            response.people.forEach(element =>this.setState({name:element.names}))
            response.people.forEach(element =>this.setState({surname:element.surnames}))
            response.people.forEach(element =>this.setState({rface:element.registered_face}))
            response.people.forEach(element =>this.setState({wanted:element.wanted}))
            response.people.forEach(element =>this.setState({nationality:element.nationality}))
            response.people.forEach(element =>this.setState({sex:element.sex}))
            response.people.forEach(element =>this.setState({birth:element.birth}))
            console.log(this.state.id)
            console.log(this.state.face)
            console.log(this.state.name)
            
            if(this.state.rface===null){
            Alert.alert("ERROR","no se encontraron coincidencias")}
            else{
            this.props.navigation.navigate('CoincidenciaUsuario',
            {id:this.state.id,name:this.state.name,face:this.state.face,
              surnames:this.state.surname,rface:this.state.rface,wanted:this.state.wanted,
            nationality:this.state.nationality,sex:this.state.sex,birth:this.state.birth })
       
            }
          
      })
      .catch(error => {
        console.log("upload error", error);

        Alert.alert("ERROR","No se encontraron coincidencias");
        
      });
  };
  guardar = () => {
    let { image, base64 } = this.state;

    if (image === null) {
      Alert.alert("ERROR", "EL CAMPO DE IMAGEN ESTA VACIO");
    } else {
      this.props.navigation.navigate("Dashboard", {
        item: image,
        base: base64
      });
    }
  };

  render() {
    let { image } = this.state;

    const {
      type,

      zoom,
      whiteBalance,
      focusDepth,
      photo
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Image
            style={{
              width: 230,
              height: 230,
              borderRadius: 20,
              position: "absolute"
            }}
            source={{ uri: image }}
          />
          <View style={styles.cuadro}></View>
        </View>
        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.styleButtom}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ modalVisible: !this.state.modalVisible });
            }}
          >
            <Text style={styles.inputButtom}>
              Capturar <Ionicons name="ios-camera" size={18} color="#fff" />
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.styleButtom1}>
          <TouchableOpacity onPress={this._pickImage}>
            <Text style={styles.inputButtom1}>
              Cargar{" "}
              <Ionicons name="md-cloud-upload" size={18} color="#00425A" />
            </Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.styleButtom}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={this.handleUploadPhoto}
          >
            <Ionicons name="md-search" size={18} color="white" />
            <Text style={styles.inputButtom}>Buscar</Text>
          </TouchableOpacity>
        </LinearGradient>
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
                <TouchableOpacity style={{height:35,width:35,marginLeft:'-20%'}}
                onPress={() => this.state.estadocamara?
                
                this.setState({type: Camera.Constants.Type.front,estadocamara:false}):
                this.setState({type: Camera.Constants.Type.back,estadocamara:true})}>
                <Text style={styles.icon}>
                  {" "}
                  <Ionicons name="md-reverse-camera" size={35} color="#fff" />{" "}
                </Text>
              </TouchableOpacity>
              )}
              {!photo && (
                <TouchableOpacity style={{
                height:40,width:'30%',backgroundColor:"#fff",alignItems:'center'
                ,borderRadius:10,justifyContent:'center',marginLeft:'20%' }}
                onPress={this._takePictureButtonPressed}>
                <Text style={styles.icon}>
                  {"TAKE PICTURE "}
                </Text>
              </TouchableOpacity>
              )}
              
              
              {/* //previo */}
              {photo && <Image style={styles.photo} source={photo} />}
            </View>
          </View>
        </Modal>
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
    alignItems: "center"
  },
  containermodal: {
    flex: 1,
    backgroundColor: "black",
    position: "relative"
  },

  viewContainer: {
    marginTop: 10,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 225,
    height: 225,
    borderRadius: 25,
    backgroundColor: "#CCE3EB"
  },
  cuadro: {
    width: "80%",
    height: "80%",
    borderColor: "white",
    borderWidth: 7,

    position: "absolute"
  },
  cuadro2: {
    marginLeft: "10%",
    marginTop: "30%",
    width: "80%",
    height: "60%",
    borderColor: "white",
    borderWidth: 7,

    position: "absolute"
  },
  inputButtom: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    padding: 13,
    color: "#fff",
    paddingLeft: 10
  },
  styleButtom: {
    borderRadius: 15,
    marginTop: 30,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: "#0097CD",
    paddingHorizontal: 70
  },
  inputButtom1: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    padding: 13,
    color: "#00425A"
  },
  styleButtom1: {
    borderRadius: 15,
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "#CCE3EB",
    marginBottom: 45,
    paddingHorizontal: 75
  },
  camera: {
    height: "100%",
    width: "130%"
  },

  controls: {
    position: "absolute",
    flexDirection:'row',
    zIndex: 10,
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    
  },

  photo: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 0,
    bottom: 0,
    top: 0
  },
  icon:{
    fontSize:15,
    color:'black',
    fontWeight:'bold',
    fontFamily:"PoppinsSemiBold"
  }
});
