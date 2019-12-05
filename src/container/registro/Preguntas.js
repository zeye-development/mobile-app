import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Preguntas() {
  return (
    <View style={styles.container}>

        <View style={styles.viewContainer}>
             <Text style={styles.font} >ya tienes cuenta?</Text>  
        </View>
        
        <View style={styles.viewContainer} >
            <Text style={styles.font2}>Iniciar Sesion  <Ionicons name='md-arrow-forward' size={16} color="#00425A" /></Text>
        </View>
              
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 350,
    alignItems: 'stretch'
  },
  viewContainer: {
    alignItems: 'center',
    marginVertical: 3
  },
  font: {
    marginBottom: 5, 
    color: '#00425A',
    fontSize: 14
  },
  font2: {
    color: '#00425A',
    fontSize: 16
  }
});
