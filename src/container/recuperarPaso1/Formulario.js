import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Formulario() {
  return (
    <View style={styles.container}> 
        <View style={styles.viewContainer}>
            <TextInput placeholder='Email' style={styles.input} />
        </View>     
        <View style={styles.styleButtom} >
            <Text style={styles.inputButtom}>Continuar  <Ionicons name='md-arrow-forward' size={20} color="#fff" /></Text>
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
  input: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33
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
  },
  viewContainerCheck: {
    padding: 13,
    color: '#EBF2F4',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 15 
  } 
});
