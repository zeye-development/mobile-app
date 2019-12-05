import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Formulario() {
  return (
    <View style={styles.container}>

        <View style={styles.viewContainerGrup}>
             <View style={styles.viewContainerInput}>
                <TextInput style={styles.input1} value='keyberth' />
              </View>
             <View style={styles.viewContainerInput}>
                <TextInput value='Rengel' style={styles.input1} />
              </View>
        </View>
        <View style={styles.viewContainer}>
            <TextInput value='venezuela' style={styles.input} />
        </View>

        <View style={styles.viewContainer}>
            <TextInput value='27143528' style={styles.input} />
        </View>

        <View style={styles.viewContainer}>
            <TextInput value='masculino' style={styles.input} />
        </View>
        
        <View style={styles.viewContainerGrup} >
            <Text style={styles.viewContainerButtom}>
                <Text style={{fontSize: 18,padding: 13,color: '#01B8E2'}}><Ionicons name='md-trash' size={20} color="#01B8E2" />  Eliminar </Text>
            </Text>
            <Text style={styles.viewContainerButtom1}>
                <Text style={{fontSize: 18,padding: 13,color: '#fff'}}><Ionicons name='md-create' size={20} color="#fff" />  Anadir </Text>
            </Text>
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
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: '#0097CD'
  },
  viewContainerCheck: {
    padding: 13,
    color: '#EBF2F4',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 15 
  },
  viewContainerButtom: {
    borderRadius: 15,
    backgroundColor: '#D9E3E6',
    width: 170,
    padding: 13,
    textAlign: "center",
  },
  viewContainerButtom1: {
    borderRadius: 15,
    backgroundColor: '#01B8E2',
    width: 170,
    padding: 13,
    textAlign: 'center'
  }
});
