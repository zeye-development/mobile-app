import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function LoginRedes() {
  return (
    <View style={styles.container}>


        <View style={styles.viewContainer}>
             <Text style={styles.google} >G Iniciar con Google</Text>  
        </View>
        <View style={styles.viewContainer}>
            <Text style={styles.facebook}>F Iniciar con Facebook</Text>
        </View>
        
        <View style={{alignItems: 'center', margin: 10}} >
            <Text style={{fontSize: 20}}>o</Text> 
        </View>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 10,
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
