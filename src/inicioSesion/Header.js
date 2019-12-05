import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function InicioSesion() {
  return (
    <View style={styles.container}>

        <Text style={styles.icon}> === </Text> 
        <Text style={styles.headerText}>Iniciar Sesion</Text>
        <Text>       </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    // alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20
  },
  headerText: {
    color: 'blue',
    fontSize: 16
  },
  icon: {
    //   marginRight: 55
  }
});
