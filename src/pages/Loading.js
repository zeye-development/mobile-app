import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { getUsersAction } from './../redux/userDuck';

const Loading = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction())
      .then(data => {
        if(data.status === 200) {
          navigation.replace('Dashboard');
        }
      })
      .catch(() => navigation.replace('InicioSesion'))
  }, [])

  return (
    <Container>
      <Image
        source={require('../../assets/quantic.jpg')}
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
    width: '45%',
    height: '45%'
  }
});
