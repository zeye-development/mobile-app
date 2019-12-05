import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style={styles.container}>

        <Text style={styles.icon}> <Ionicons name='md-arrow-back' size={20} color="#00425A" /> </Text> 
        <Text style={styles.headerText}>Nuevo Usuario</Text>
        <Text>  </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    maxWidth: 350,
    flexDirection: 'row',
    // alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10
  },
  headerText: {
    color: '#00425A',
    fontSize: 16
  },
  icon: {
    //   marginRight: 55
  }
});
