import React from "react";
import {
  StyleSheet,
  Text,
  View,
  
} from "react-native";

export default class Formulario extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      name:null,
      surname:null,
      
      url:null
    }}
    componentDidMount=()=>{
      let pid=JSON.stringify(this.props.navigation.getParam("id", "id"))
      let id = pid.replace(/['"]+/g, "");
      this.setState({id:id})

      let names=JSON.stringify(this.props.navigation.getParam("name", "name"))
      console.log(names)
      names = names.replace(/[^a-z0-9,\s]/gi, '').replace(/[_\s]/g, '-');
      
      var cname = names.split(',');
      let name= cname[0]+' '+cname[1]
      

      let surnames=JSON.stringify(this.props.navigation.getParam("surnames", "surname"))
      console.log(surnames)
      sur = surnames.replace(/[^a-z0-9,\s]/gi, '').replace(/[_\s]/g, '-');
      
      var surname = sur.split(',');
       surname= surname[0]+' '+surname[1]
      
      
      console.log(name)
      this.setState({name:name})
      this.setState({surname:surname})
      let wanted=JSON.stringify(this.props.navigation.getParam("wanted","wanted"))
      if (wanted==='false'){
        this.setState({wanted:"No"})
      }
      else{
        this.setState({wanted:"Si"})
      }
      console.log(wanted)
      let nacionality=JSON.stringify(this.props.navigation.getParam("nationality","nationality"))
      nacionality=nacionality.replace(/[^a-z0-9,\s]/gi, '').replace(/[_\s]/g, '-');
      this.setState({nacionality:nacionality})
      console.log(nacionality)
      let sex=JSON.stringify(this.props.navigation.getParam("sex","sex"))
      sexo=sex.replace(/[^a-z0-9,\s]/gi, '').replace(/[_\s]/g, '-');
      console.log(sex)
      if (sexo==='Female'){
        this.setState({sexo:"Femenino"})
      }
      else{
        this.setState({sexo:"Maculino"})
      }
        console.log(sexo)
      this.setState({sex:sexo})
      let birth=JSON.stringify(this.props.navigation.getParam("birth","birth"))
      birth=birth.replace(/['"]+/g, "");
      this.setState({birth:birth})
    }
    render(){
      let {id,name,surname,wanted,nacionality,sex,birth}=this.state
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Solicitado: </Text>
          <Text style={styles.input}>{wanted}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Nombres: </Text>
          <Text style={styles.input}>{name}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Apellidos: </Text>
          <Text style={styles.input}>{surname}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Identificacion: </Text>
          <Text style={styles.input}>{id}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Nacionalidad: </Text>
          <Text style={styles.input}>{nacionality}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Sexo: </Text>
          <Text style={styles.input}>{sex}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.inputTitle}>Fecha Nacimiento: </Text>
          <Text style={styles.input}>{birth}</Text>
        </View>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 350,
    paddingHorizontal: 30
  },
  input: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    // paddingTop: 2,
    paddingHorizontal: 33
  },
  inputTitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    paddingTop: 5,
    paddingHorizontal: 33
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5
  },
  containerInfo: {
    marginVertical: 5
  }
});
