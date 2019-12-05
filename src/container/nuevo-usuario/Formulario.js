import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Formulario() {
  return (
    <View style={styles.container}>

        <View style={styles.viewContainerGrup}>
             <View style={styles.viewContainerInput}>
                <TextInput style={styles.input1} placeholder='Nombre' />
              </View>
             <View style={styles.viewContainerInput}>
                <TextInput placeholder='Apellido' style={styles.input1} />
              </View>
        </View>
        <View style={styles.viewContainer}>
            <TextInput placeholder='Pais' style={styles.input} />
        </View>

        <View style={styles.viewContainer}>
            <TextInput placeholder='Identidad' style={styles.input} />
        </View>

        <View style={styles.viewContainer}>
            <TextInput placeholder='Sexo' style={styles.input} />
        </View>
        <View style={styles.viewContainerCheck}>
            <Text style={{color: '#00425A', fontSize: 16}} ><Ionicons name='md-checkbox-outline' size={18} color="#00425A" />  Anadir a solicitados</Text>
        </View>
        
        <View style={styles.styleButtom} >
            <Text style={styles.inputButtom}><Ionicons name='md-person-add' size={20} color="#fff" />  Anadir </Text>
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
  input1: {
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 33,
    marginRight: 13
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
  viewContainerGrup: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  viewContainerInput: {
    borderRadius: 15,
    backgroundColor: '#EBF2F4',
    width: 170
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
