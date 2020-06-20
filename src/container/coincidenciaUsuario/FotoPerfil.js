import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import config from './../../../config';

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount = () => {
    this.setState({
      user: this.props.user
    });
  }
  
  render() {

    if(!this.state.user) return false;

    let { current_face, registered_face, wanted } = this.state.user;

    return (
      <View style={styles.container}>
        <View style={styles.viewContainer1}>
          <Image
            source={{ uri:`${config.API_URL}/file=${current_face}` }}
            style={styles.imageBackground}
          />
        </View>
        <AntDesign name="arrowright" size={32} color="#00425A" />
        { wanted ?
          <View style={[styles.viewContainer, styles.solicitado]}>
            <Image
              source={{ uri:`${config.API_URL}/file=${registered_face}` }}
              style={styles.imageBackground}
            />
          </View> : <View style={[styles.viewContainer, styles.noSolicitado]}>
            <Image
              source={{ uri:`${config.API_URL}/file=${registered_face}` }}
              style={styles.imageBackground}
            />
          </View>
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    maxWidth: 450,
    paddingHorizontal: 30,
    flexDirection: 'row'
  },
  viewContainer: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    borderRadius: 70
  },
  viewContainer1: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 70
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  usuario: {
    padding: 13,
    backgroundColor: '#00DFAA',
    justifyContent: 'center',
    color: '#fff',
    borderRadius: 15,
    marginTop: 5,
    fontFamily: 'PoppinsRegular'
  },
  solicitado: {
    borderColor: '#FE6363',
    borderWidth: 8
  },
  noSolicitado: {
    borderColor: '#00DFAA',
    borderWidth: 8
  }
});
