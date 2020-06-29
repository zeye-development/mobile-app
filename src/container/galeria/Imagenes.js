import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Imagen from './Imagen';
import styled from 'styled-components/native';

const Images = ({ images, navigation }) => {
  const [modalVisibleAlert, setModalVisibleAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');

  if(images.length === 0) return false;
  
  return(
    <Container style={styles.container}>
      { images.map((url, key) => (
        <Imagen
          navigation={navigation}
          key={key}
          url={url}
          style={styles.imagen}
        />
      ))}

      {/* modal alert============= */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisibleAlert}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 66, 90, 0.5)'
          }}
        ></View>

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
            <Text
              style={{
                fontSize: 18,
                color: '#00425A',
                textAlign: 'center',
                textShadowRadius: 2,
                fontFamily: 'PoppinsBold'
              }}
            >
              { messageAlert } - holis
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setModalVisibleAlert(!modalVisibleAlert)}>
              <TextConfirmModal>
                {' '} Entendido
              </TextConfirmModal>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  )
}

export default Images;

const Container = styled.View`
`;

const TextConfirmModal = styled.Text`
  font-size: 16px;
  color: #01B8E2;
  text-align: right;
  font-family: 'PoppinsRegular';
  margin: 40px 20px;
`;

let { width } = Dimensions.get('window');
width -= 30;
let widthImagen = width / 3;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    maxWidth: 450,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  imagen: {
    width: widthImagen,
    borderWidth: 2,
    borderColor: 'peru',
    flex: 1,
  }
});
