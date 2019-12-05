import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Preguntas() {
  return (
    <View style={styles.container}>

        <View style={styles.viewContainer}>
             <Text style={{marginBottom: 10}} >Has olvidado tu contrasena?</Text>  
        </View>
        <View style={styles.viewContainer}>
            <Text style={styles.font}>Aun no tienes cuenta?</Text>
        </View>
        
        <View style={styles.viewContainer} >
            <Text style={styles.font}>Registrate</Text>
        </View>
              
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignItems: 'stretch'
  },
  viewContainer: {
    // borderWidth: 1,
    // borderRadius: 15,
    alignItems: 'center',
    marginVertical: 7
  }
});
