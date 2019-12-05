import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginRedes() {
  return (
    <View style={styles.container}>


        <View style={styles.viewContainer}>
             <Text style={styles.google} ><Ionicons name='logo-googleplus' size={18} color="#00425A" />  Registrate con Google</Text>  
        </View>
        <View style={styles.viewContainerF}>
            <Text style={styles.facebook}><Ionicons name='logo-facebook' size={20} color="#fff" />  Registrate con Facebook</Text>
        </View>
        
        <View style={{alignItems: 'center', margin: 10}} >
            <Text style={{fontSize: 18, color: '#00425A'}}>o</Text> 
        </View>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 10,
    alignItems: 'stretch',
    maxWidth: 350
  },
  google: {
    color: '#00425A',
    fontSize: 18,
    paddingVertical: 13,
  },
  viewContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#00425A',
    marginVertical: 5,
    alignItems: 'center'
  },
  viewContainerF: {
    borderRadius: 15,
    backgroundColor: '#00425A',
    marginVertical: 5,
    alignItems: 'center'
  },
  facebook: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 13,
  }
});
