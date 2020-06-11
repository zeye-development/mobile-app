import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, StyleSheet } from "react-native";
import styled from 'styled-components/native';
import { AsyncStorage } from 'react-native';

import { getUsersAction } from './../redux/userDuck';

const Loading = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  // console.log('user ', user)

  useEffect(() => {
    dispatch(getUsersAction())
      .then(data => {
        // console.log('LOadin', data.data.data)
        const users = data.data.data;
        if(data.status === 200 && users.length !== 0) {
          navigation.replace("Dashboard");
        } else {
          AsyncStorage.setItem('user', JSON.stringify(user))          
          navigation.replace("NuevoUsuario");
        }
      })
      .catch(() => navigation.replace("InicioSesion"))
  }, [])

  return (
    <Container>
      <Image
        source={require("../../assets/quantic.jpg")}
        resizeMode="contain"
        style={styles.splash}
      />
    </Container>
  );
}

export default Loading;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  splash: {
    width: "45%",
    height: "45%"
  }
});
