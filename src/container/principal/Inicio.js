import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export default function Inicio() {
  return (
    <View style={style.container}>
      <Text>
        Zeye Cloud ®
      </Text>
    </View>
  );
}

const Text = styled.Text`
  font-size: 32px;
  text-align: center;
  color: #fff;
  font-family: 'PoppinsMedium';
`;

const style = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
