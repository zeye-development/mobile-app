import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import config from './../../../config';
import LinearGradientComponent from 'app/src/components/shared/LinearGradient';

import {
  ContainerTransparent,
  TextHeaderModal,
  TextConfirmModal
} from './styles';
import { TextBtn } from 'app/src/styles/ui';

/*
const Formulario = () => {

}
export default Formulario;
*/

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: null,
      base64: null,
      modalVisibleAlert: false,
      mensajeAlert: '',
      mainFoto: null,
      modalLoading:false,
      id: '',
      token: '',
      images: []
    };
  }
  async componentDidMount() {
    console.log(this.props.navigation.getParam('mainFoto'));
    let token = await AsyncStorage.getItem('token');

    let { id: _id, images } = this.props;

    let toke = token.replace(/['"]+/g, '');
    this.setState({
      token: toke,
      id: _id,
      images
    });
    
    let perfil = JSON.stringify(this.props.navigation.getParam('item', 'image'));
    let pfoto = perfil.replace(/['"]+/g, '');

    this.setState({ foto: pfoto });
    let parabase64 = JSON.stringify(this.props.navigation.getParam('base', 'base64'));
    let base64 = parabase64.replace(/['"]+/g, '');
    this.setState({ base64: base64 });
  }

  handleUploadPhoto = () => {
    if (this.state.foto != 'image') {
      try{
        let { foto, base64 } = this.state;
        console.log(this.state.foto);

        if (this.state.foto != null) {

          this.setState({ modalLoading:true })
          fetch(`${config.API_URL}/person-query`, {
            method: 'PUT',
            body: JSON.stringify({
              picture: this.state.base64,
              dni: this.props.id
            }),
            headers: {
              'Content-Type': 'application/json',
              dni: this.props.id,
              key:this.state.token,
            }
          })
            .then(response => response.json())
            .then(response => {
              console.log('upload succes', response);
              this.setState({
                modalVisibleAlert: true,
                mensajeAlert: 'Foto añadida a la galeria',
                modalLoading:true
              });
              setTimeout(() => {
                this.setState({ uri: null });
                this.props.navigation.replace('Loading');
              }, 1000);
            })
            .catch(error => {
              console.log('upload error picture:', error);

              this.setState({
                modalVisibleAlert: true,
                mensajeAlert: 'Ocurrió un error al añadir la foto',
                modalLoading:true
              });
            });
        }}
      catch{
        this.setState({
          modalVisibleAlert: true,
          mensajeAlert: 'Ocurrió un error al añadir la foto',
          modalLoading:true })
      }}
    else{
      this.setState({
        modalVisibleAlert: true,
        mensajeAlert: 'El campo de la Imagen no puede estar vacio'
      });
    }
  };

  render() {
    return (
      <Container>
        <Main
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('Captura', { id: this.state.id, images: this.state.images, mainFoto: true })
            }
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#EBF2F4',
              borderRadius: 100,
              position: 'absolute'
            }}
          >
            <Image
              source={{ uri: this.state.foto }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: '#01B8D2',
              height: '45%',
              width: '16%',
              marginLeft: '30%',
              marginTop: '20%',
              borderRadius: 30,
              alignItems: 'center'
            }}
          >
            <View style={{ marginTop: '20%' }}>
              <Ionicons name="md-camera" size={25} color="white" />
            </View>
          </View>
        </Main>

        <LinearGradientComponent
          styles={styles.styleButtom}
        >
          <TouchableOpacity onPress={this.handleUploadPhoto}>
            <TextBtn>
              <Ionicons name="md-person-add" size={16} color="#fff" /> Añadir{' '}
            </TextBtn>
          </TouchableOpacity>
        </LinearGradientComponent>
        {/* modal aLert ================ */}

        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisibleAlert}
        >
          <ContainerTransparent />

          <View
            style={{
              width: 290,
              backgroundColor: '#fff',
              borderRadius: 15,
              position: 'absolute',
              marginTop: '45%',
              marginHorizontal: '10%'
            }}
          >
            <View style={{ marginHorizontal: 20, marginTop: 33 }}>
              <TextHeaderModal>
                {this.state.mensajeAlert}
              </TextHeaderModal>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    modalVisibleAlert: !this.state.modalVisibleAlert
                  });
                }}
              >
                <TextConfirmModal>
                  {' '} Entendido
                </TextConfirmModal>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalLoading}
        >
          <ContainerTransparent />

          <View
            style={{
              position: 'absolute',
              top: '45%',
              left: '45%'
            }}
          >
            {this.state.modalLoading ? (
              <ActivityIndicator size={30} color="#fff" />
            ) : null}
          </View>
        </Modal>
      </Container>
    );
  }
}

const Container = styled.View`
  margin-bottom: 10px;
  align-items: stretch;
  max-width: 450px;
  padding: 0 30px;
`;

const Main = styled.View`
  flex-direction: row;
  background-color: #fff;
  width: 100%!important;
  height: 100%!important;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;  
`;

const styles = StyleSheet.create({
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'stretch',
    backgroundColor: '#0097CD'
  },
});
