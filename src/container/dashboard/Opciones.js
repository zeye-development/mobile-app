import React, { useState } from 'react';
import { StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { Entypo, Foundation } from '@expo/vector-icons';
import styled from 'styled-components/native';

export default class Opciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = { estado: false, Barra: 0, BarraP: 1 };
  }

  Barra1 = () => {
    this.setState({ Barra: 1 });
    this.setState({ BarraP: 0 });
    this.setState({ estado: true });
    this.props.CambiarEstado(true);
  };

  Barra2 = () => {
    this.setState({ Barra: 0 });
    this.setState({ BarraP: 1 });
    this.setState({ estado: false });
    this.props.CambiarEstado(false);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainerGrup}>
          <View style={styles.viewContainerInput}>
            <View style={{ alignItems: 'center' }}>
              {this.state.estado ? (
                <Label onPress={this.Barra1}>
                  <Foundation
                    name="prohibited"
                    size={18}
                    color="rgb(255, 255, 255)"
                  />{' '}
                  Solicitados
                </Label>
              ) : (
                <Label onPress={this.Barra1}>
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
              progress={this.state.Barra}
            />
          </View>

          <View style={styles.viewContainerInput}>
            <View style={{ alignItems: 'center' }}>
              {this.state.estado ? (
                <Label onPress={this.Barra2}>
                  <Entypo
                    name="users"
                    size={18}
                    color="rgba(255, 255, 255, 0.5)"
                  />{' '}
                  Usuarios
                </Label>
              ) : (
                <Label onPress={this.Barra2}>
                  <Entypo name="users" size={18} color="rgb(255, 255, 255)" />{' '}
                  Usuarios
                </Label>
              )}
            </View>

            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              color="rgb(255, 255, 255)"
              progress={this.state.BarraP}
            />
          </View>
        </View>
      </View>
    );
  }
}

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
    // alignItems: 'stretch',
    marginTop: 20,
    // marginBottom: 10,
    // backgroundColor: '#fff',
    borderRadius: 15
  },
  viewContainerInput: {
    // borderRadius: 15,
    // backgroundColor: '#EBF2F4',
    width: 145,
    alignItems: 'stretch'
  }
});
