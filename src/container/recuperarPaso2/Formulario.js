import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Formulario() {
  return (
    <View style={styles.container}>      
        <View style={styles.styleButtom} >
            <Text style={styles.inputButtom}>Enviado  <Ionicons name='md-checkmark-circle-outline' size={20} color="#fff" /></Text>
        </View>
        <View style={styles.viewContainerCheck}>
            <Text style={{color: '#00425A', fontSize: 16}} >Volver a enviar  <Ionicons name='md-arrow-forward' size={18} color="#00425A" /> </Text>
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
    backgroundColor: '#00DFAA'
  },
  viewContainerCheck: {
    padding: 13,
    color: '#EBF2F4',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 15 
  } 
});
