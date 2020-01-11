import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "../container/dashboard/Header";
import ProgreseBar from "../container/dashboard/ProgreseBar";
import Opciones from "../container/dashboard/Opciones";
import Perfiles from "../container/dashboard/Perfiles";
import { LinearGradient } from "expo-linear-gradient";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount=()=>{
    let long=JSON.stringify(this.props.navigation.getParam( "long", "long"))
    this.setState({long:long})
      console.log('AQUI ESTA!!!!!')
      console.log(long)
      console.log('AQUI ESTA!!!!!')
  }
  render(){
    
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.containerSuperior}
        >
          <Header navigation={this.props.navigation} />
          <ProgreseBar navigation={this.props.navigation} />
          <Opciones navigation={this.props.navigation}
          CambiarEstado={(estado)=>{this.setState({estado:estado})}} />
        </LinearGradient>
        {this.state.long!=0?       
        <View>
         <Perfiles navigation={this.props.navigation}
           estado={this.state.estado}/></View>:<View style={{ paddingLeft: 30,paddingRight: 25,paddingTop: 10}}>
        </View>}
      </ScrollView>
    </View>
  );
}}
const styles = StyleSheet.create({
  containerSuperior: {
    // backgroundColor: "#0097CD",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
    // paddingLeft: 5
  }
});
