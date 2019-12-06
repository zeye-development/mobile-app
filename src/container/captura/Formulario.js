import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Formulario() {
  return (
    <View style={styles.container}>  

     <View style={styles.styleButtom}>
          <Text style={styles.inputButtom}>Capturar  <Ionicons name='ios-camera' size={20} color="#fff" /></Text>
        </View>
        <View style={styles.styleButtom1}>
          <Text style={styles.inputButtom1}>Cargar  <Ionicons name='md-cloud-upload' size={20} color="#00425A" /></Text>
      </View>    
        <View style={styles.styleButtom} >
            <Text style={styles.inputButtom}><Ionicons name='ios-download'  size={20} color="#fff" />  Guardar</Text>
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
  inputButtom: {
    fontSize: 18,
    padding: 13,
    color: '#fff'
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#0097CD'
  },
  inputButtom1: {
    fontSize: 18,
    padding: 13,
    color: '#00425A'
  },
  styleButtom1: {
    borderRadius: 15,
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#CCE3EB',
    marginBottom: 45
  },
});
