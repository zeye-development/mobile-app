import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import styled from 'styled-components/native';

export default function FotoPerfil() {
  return (
    <Container>
      <View style={styles.viewContainer}>
        <Image
          style={{ width: 220, height: 220 }}
          source={require('../../../assets/captura.png')}
        />
      </View>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  margin-top: 50px;  
  margin-bottom: 5px;
  max-width: 450px;
  padding: 0 30px;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 5,
    maxWidth: 450,
    paddingHorizontal: 30
  },
  viewContainer: {
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 225,
    height: 225,
    borderRadius: 25
  }
});
