import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";

export default function Inicio() {
  return (
    <View style={style.container}>
      {/* <Text
        style={[
          style.text,
          {
            fontFamily: "PoppinsMedium"
          }
        ]}
      >
        PDVSA ®
      </Text> */}
      <Image
          style={style.image}
          resizeMode='contain'
          source={require("./../../../assets/pdv_blanco.png")}
        />     
    </View>
  );
}

const Imagen = styled.Image`
  /* width: 100%;
  height: 100%;
  resize: 'contain'; */
`;

const style = StyleSheet.create({
  image: {
    flex: 1,
    width: '80%',
    height: '80%',
  },  
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    color: "#fff",
    padding: 5,
    marginTop: 48
  },
});
