import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

const SocialNetworks = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <ContainerSocialNetwork borderWidth="1px" borderColor="#00425A">
          <SocialNetwork textColor="#00425A">
            <Image
              source={require('../../../assets/google.png')}
              style={{ width: 18, height: 18 }}
            />{' '}
              Iniciar con Google
          </SocialNetwork>
        </ContainerSocialNetwork>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <ContainerSocialNetwork backgroundColor="#3b5998">
          <SocialNetwork>
            <FontAwesome name="facebook" size={20} color="#fff" />
            Iniciar con Facebook
          </SocialNetwork>
        </ContainerSocialNetwork>
      </TouchableOpacity>

      <View style={{ alignItems: 'center', margin: 5 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'PoppinsRegular',
            color: '#00425A'
          }}
        >
          o
        </Text>
      </View>

      {/* //////Modal de alerta ===========================*/}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 66, 90, 0.5)'
            // opacity: 0.9
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
              Lo sentimos, esta funcion no se encuentra disponible.
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  fontSize: 16,
                  // padding: 13,
                  color: '#01B8E2',
                  textAlign: 'right',
                  fontFamily: 'PoppinsRegular',
                  marginTop: 40,
                  marginHorizontal: 20,
                  marginBottom: 20
                }}
              >
                {' '}
                Entendido
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
}

export default SocialNetworks;

const Container = styled.View`
  align-items: stretch;
  margin-top: 30px;
  margin-bottom: 10px;
  max-width: 450px;
  padding: 0 30px;
`;

const ContainerSocialNetwork = styled.View`
  border-width: ${props => props.borderWidth || 0};
  border-radius: 15px;
  border-color: ${props => props.borderColor || 0};
  background-color: ${props => props.backgroundColor || '#fff'};
  margin: 5px 0;
  align-items: center;
`;

const SocialNetwork = styled.Text`
  color: ${props => props.textColor || '#fff'};
  font-size: 16px;
  padding: 13px 0;
  font-family: 'PoppinsRegular';
`;
