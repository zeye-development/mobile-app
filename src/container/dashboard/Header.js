import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';


export default function Header(props) {
  return (
    <View style={styles.container}>

        <Text > <Feather name='settings' size={20} color="#fff" /> </Text> 
        <Text style={styles.headerText}>Dashboard</Text>
        <Text onPress={ () => props.navigation.navigate('InicioSesion') } > <Ionicons name='ios-log-in' size={20} color="#fff" /> </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#0097CD',
    maxWidth: 350,
    flexDirection: 'row',
    // alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingLeft: 30, 
    paddingRight: 30,
    paddingBottom: 10
  },
  headerText: {
    color: '#fff',
    fontSize: 16
  }
});
