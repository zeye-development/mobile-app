import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginRedes() {
  return (
    <View style={styles.container}>
        <View style={styles.viewContainer}>
            <Image
              style={{width: 120, height: 120}}
              source={require('../../../assets/perfil.png')}
            />
        </View>
        <Text style={styles.usuario}><Ionicons name='ios-checkmark-circle-outline' size={18} color="#fff" />  Usuario Requerido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'stretch',
    maxWidth: 350
  },
  viewContainer: {
    marginVertical: 5,
    alignItems: 'center',
  },
  usuario: {
    padding: 13,
    backgroundColor: '#00DFAA',
    textAlign: 'center',
    color: '#fff',
    borderRadius: 15,
    marginTop: 15
  }
});
