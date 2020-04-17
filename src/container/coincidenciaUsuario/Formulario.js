import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  
  componentDidMount = () => {
    this.setState({
      user: this.props.user
    });  
  };

  render() {

    if(!this.state.user) return false;

    let { _id, names, surnames, sex, nationality, birth, wanted } = this.state.user;

    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          {/* <View style={styles.containerInfo}>
            <Text style={styles.inputTitle}>Solicitado: </Text>
            <Text style={styles.input}>{ wanted ? 'Si' : 'No' }</Text>
          </View> */}
          <View style={styles.containerInfo}>
            <Text style={styles.inputTitle}>Nombres: </Text>
            <Text style={styles.input}>{ names != undefined ? names.join(' ') : '' }</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.inputTitle}>Apellidos: </Text>
            <Text style={styles.input}>{ surnames != undefined ? surnames.join(' ') : '' }</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.inputTitle}>Identificacion: </Text>
            <Text style={styles.input}>{ _id }</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.inputTitle}>Nacionalidad: </Text>
            <Text style={styles.input}>{ nationality }</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.inputTitle}>Sexo: </Text>
            <Text style={styles.input}>{ sex == 'Male' ? 'Masculino' : 'Femenino'  }</Text>
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
    maxWidth: 450,
    paddingHorizontal: 30
  },
  input: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
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
