import React, { useState } from 'react';
import { StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { Entypo, Foundation } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Options = (props) => {
  const [estado, setEstado] = useState(false)
  const [Barra, setBarra] = useState(0)
  const [BarraP, setBarraP] = useState(1)

  onBarra1 = () => {
    setBarra(1);
    setBarraP(0);
    setEstado(true);
    props.CambiarEstado(true);
  };

  onBarra2 = () => {
    setBarra(0);
    setBarraP(1);
    setEstado(false);
    props.CambiarEstado(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewContainerGrup}>
        <View style={styles.viewContainerInput}>
          <View style={{ alignItems: 'center' }}>
            {estado ? (
              <Label onPress={onBarra1}>
                <Foundation
                  name="prohibited"
                  size={18}
                  color="rgb(255, 255, 255)"
                />{' '}
                Solicitados
              </Label>
            ) : (
              <Label onPress={onBarra1}>
                <Foundation
                  name="prohibited"
                  size={18}
                  color="rgba(255, 255, 255, 0.5)"
                />{' '}
                Solicitados
              </Label>
            )}
          </View>

          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            color="#fff"
            progress={Barra}
          />
        </View>

        <View style={styles.viewContainerInput}>
          <View style={{ alignItems: 'center' }}>
            {estado ? (
              <Label onPress={onBarra2}>
                <Entypo
                  name="users"
                  size={18}
                  color="rgba(255, 255, 255, 0.5)"
                />{' '}
                Usuarios
              </Label>
            ) : (
              <Label onPress={onBarra2}>
                <Entypo name="users" size={18} color="rgb(255, 255, 255)" />{' '}
                Usuarios
              </Label>
            )}
          </View>

          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            color="rgb(255, 255, 255)"
            progress={BarraP}
          />
        </View>
      </View>
    </View>
  );
}

export default Options

const Label = styled.Text`
  color: rgb(255, 255, 255);
  align-content: center;
  font-family: 'PoppinsSemiBold';
  font-size: 14px;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    maxWidth: 450
  },
  viewContainerGrup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderRadius: 15
  },
  viewContainerInput: {
    width: 145,
    alignItems: 'stretch'
  }
});
