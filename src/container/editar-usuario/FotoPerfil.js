import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function FotoPerfil(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Captura')}>
        <View style={styles.viewContainer}>
          <ImageBackground
            source={require('../../../assets/perfil.png')}
            style={styles.imageBackground}
          >
            <AntDesign name="plus" size={50} color="#EBF0F2" />
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
    // alignItems: 'stretch',
    maxWidth: 450,
    paddingHorizontal: 30
  },
  viewContainer: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    borderRadius: 100
  },

  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
