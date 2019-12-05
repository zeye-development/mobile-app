import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Formulario() {
  return (
    <View style={styles.container}>

        <View style={styles.viewContainer}>
             <TextInput style={styles.input} placeholder='Usuario' />

        </View>
        <View style={styles.viewContainer}>
            <TextInput placeholder='Email' style={styles.input} />
        </View>

        <View style={styles.viewContainer}>
            <TextInput placeholder='Contrasena' style={styles.input} />
        </View>

        <View style={styles.viewContainer}>
            <TextInput placeholder='Repite Contrasena' style={styles.input} />
        </View>
        
        <View style={styles.styleButtom} >
            <Text style={styles.inputButtom}>Iniciar Sesion  <Ionicons name='md-arrow-forward' size={18} color="#fff" /></Text>
        </View>
              
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginBottom: 10,
    alignItems: 'stretch',
    maxWidth: 350
  },
  input: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33
  },
  inputButtom: {
    fontSize: 18,
    padding: 13,
    color: '#fff'
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: '#EBF2F4',
    marginVertical: 5,
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#0097CD'
  }
});
