import React from 'react';
import { StyleSheet, View, ProgressBarAndroid, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function ProgreseBar(props) {
  return (
    <View style={styles.container}>
        <View style={styles.viewContainer}>
            <ProgressBarAndroid 
              styleAttr='Horizontal'
              indeterminate={false}
              color='#00DFAA' 
              progress={0.25}
            />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}> <Entypo name='users' size={20} color="#fff" />  200 de 1000 Usuarios</Text>
        </View>
        <View style={styles.styleButtom} >
            <Text onPress={ () => props.navigation.navigate('NuevoUsuario') } style={styles.inputButtom}><Ionicons name='md-person-add' size={20} color="#0097CD" />  Anadir Usuario </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    marginTop: 30,
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 10,
    alignItems: 'stretch',
    maxWidth: 350
  }, 
  viewContainer: {
    paddingBottom: 20
  },
  inputButtom: {
    fontSize: 18,
    padding: 13,
    color: '#0097CD'
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

});
