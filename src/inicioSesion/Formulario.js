import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Formulario() {
  return (
    <View style={styles.container}>

        <View style={styles.viewContainer}>
             <Text style={styles.google} >G Iniciar con Google</Text>  
        </View>
        <View style={styles.viewContainer}>
            <Text style={styles.facebook}>F Iniciar con Facebook</Text>
        </View>
        
        <View style={{alignItems: 'center'}} >
            <Text style={styles.facebook}>F Iniciar con Facebook</Text>
        </View>
              
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    alignItems: 'stretch'
  },
  google: {
    color: 'blue',
    fontSize: 18,
    paddingVertical: 13,
  },
  viewContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'blue',
    marginVertical: 5,
    alignItems: 'center'
  },
  facebook: {
    color: 'blue',
    fontSize: 18,
    paddingVertical: 13,
  }
});
