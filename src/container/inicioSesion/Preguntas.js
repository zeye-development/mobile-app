import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Preguntas() {
  return (
    <View style={styles.container}>

        <View style={styles.viewContainer}>
             <Text style={styles.font} >Has olvidado tu contrasena?</Text>  
        </View>
        <View style={styles.viewContainer}>
            <Text style={styles.font1}>Aun no tienes cuenta?</Text>
        </View>
        
        <View style={styles.viewContainer} >
            <Text style={styles.font2}>Registrate  <Ionicons name='md-arrow-forward' size={16} color="#00425A" /></Text>
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
    marginVertical: 7
  },
  font: {
    marginBottom: 15, 
    color: '#01B8E2',
    fontSize: 16
  },
  font1: {
    color: '#00425A'
  },
  font2: {
    color: '#00425A',
    fontSize: 16
  }
});
