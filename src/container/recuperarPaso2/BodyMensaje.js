import React from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BodyMensaje() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{fontSize: 20, color: '#00425A'}}>Paso 2</Text>
      </View>
        <View style={styles.viewContainer}>
            <Ionicons name='md-checkmark-circle-outline' size={90} color="#fff" />
        </View>
        <View style={styles.text}>
        <Text style={{fontSize: 20, color: '#00425A'}}>Revisa tu email</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.text1}>Te enviamos a tu email</Text>
        <Text style={styles.text1}>informacion para recuperar tu</Text>
        <Text style={styles.text1}>cuenta.</Text>
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
    backgroundColor: '#00DFAA',
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
