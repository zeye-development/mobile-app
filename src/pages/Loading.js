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
      token=toke
      fetch('http://189.213.227.211:8443/known_person', {
           method: 'GET', 
           headers: {
            "Content-Type": "application/json",
            key: token,
            all:'yes'
          },
      
          })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              data: responseJson
           })
          //  console.log('holis')
          //  console.log(responseJson.data)
          console.log('AAAAAAAAAAAAAAAA')
          console.log(responseJson.data.length)
          if(responseJson.data.length!=0){
           responseJson.data.forEach(element =>this.setState({names:element.names}))
           this.setState({users: responseJson.data})

           let names=this.state.names
          longitud=names.length
         console.log(longitud)
        if (longitud===1){
          names= names[0]
        }
        if (longitud===2){
          names= names[0]+' '+names[1]
        }
        if (longitud===3){
          names= names[0]+' '+names[1]+' '+names[2]
        }
        if (longitud===4){
          names= names[0]+' '+names[1]+' '+names[2]+' '+names[3]
        }
        if (longitud===5){
          names= names[0]+' '+names[1]+' '+names[2]+' '+names[4]
        }
        
        this.setState({names:names})
  
        responseJson.data.forEach(element =>this.setState({surname:element.surnames}))
        let surname=this.state.surname
        console.log(surname)
        longitud1=surname.length
        console.log(longitud1)
        if(longitud1===1){
          surname=surname[0]
        }
        if(longitud===2){
          surname=surname[0]+' '+surname[1]
        }
        
        if(longitud===3){
          surname=surname[0]+' '+surname[1]+' '+surname[2]
        }
        
        if(longitud===4){
          surname=surname[0]+' '+surname[1]+' '+surname[2]+' '+surname[3]
        }
        
        if(longitud===5){
          surname=surname[0]+' '+surname[1]+' '+surname[2]+' '+surname[3]+' '+surname[4]
        }
        this.setState({surname:surname})
        responseJson.data.forEach(element =>this.setState({image:element.images}))
        console.log(this.state.image)
        let face=this.state.image
        let faces = face[0]
        faces = faces.replace(/['"]+/g, "");
        console.log(faces)
        const url = 'http://189.213.227.211:8443/file=' + faces
        this.setState({url:url})
        if(token){
          this.setState({len:true})
          this.props.navigation.replace("Dashboard", {item:this.state.url, name:this.state.names
        , surname:this.state.surname,id:this.state.id, users: this.state.users, cantidad:cantidad, len:this.state.len})}
        else{
          this.props.navigation.replace('InicioSesion')
          }
          
      
      }
      else{
        this.setState({len:false})
        
        this.props.navigation.replace("Dashboard",{len:this.state.len})
      }
        
        
        })
        .catch((error) => {
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
    width: "50%",
    height: "50%"
  }
});
