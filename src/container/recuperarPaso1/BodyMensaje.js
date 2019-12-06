import React from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BodyMensaje() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{fontSize: 20, color: '#00425A'}}>Paso 1</Text>
      </View>
        <View style={styles.viewContainer}>
            <Ionicons name='md-mail-unread' size={90} color="#fff" />
        </View>
        <View style={styles.text}>
        <Text style={{fontSize: 20, color: '#00425A'}}>Solicitar recuperacion</Text>  
      </View>
      <View style={styles.text}>
        <Text style={styles.text1}>Ingresa la direccion de correo</Text>
        <Text style={styles.text1}>electronico de tu cuenta para</Text>
        <Text style={styles.text1}>poder restablecerla.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 10,
    // alignItems: 'stretch',
    maxWidth: 350
  },
  viewContainer: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0097CD',
    width: 150,
    height:150,
    borderRadius: 100
  },
  text: {
    alignItems: 'center',
    marginBottom: 15
  },
  text1 : {
    fontSize: 16,
    color: '#00425A'
  }

});
