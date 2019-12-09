import React from 'react';
import { StyleSheet, Text, View, ProgressBarAndroid } from 'react-native';
import { Entypo, Foundation } from '@expo/vector-icons';

export default function Opciones() {
  return (
    <View style={styles.container}>

        <View style={styles.viewContainerGrup}>

             <View style={styles.viewContainerInput}>

               <View style={{alignItems: 'center'}}>
                  <Text style={{color: '#fff'}}><Foundation name='prohibited' size={18} color="#fff" />  Solicitados</Text>
               </View>

                <ProgressBarAndroid 
                  styleAttr='Horizontal'
                  indeterminate={false}
                  color='#fff' 
                  progress={1}
                />
              </View>

             <View style={styles.viewContainerInput}>

               <View style={{alignItems: 'center'}}>
                  <Text style={{color: '#fff', alignContent: 'center'}}><Entypo name='users' size={18} color="#fff" />  Usuarios</Text>
               </View>

                <ProgressBarAndroid 
                  styleAttr='Horizontal'
                  indeterminate={false}
                  color='#fff' 
                  progress={0}
                />
              </View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    maxWidth: 350,
    backgroundColor: '#0097CD'
  },
  viewContainerGrup: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'stretch',
    marginTop: 20,
    // marginBottom: 10,
    // backgroundColor: '#fff',
    borderRadius: 15,
  },
  viewContainerInput: {
    // borderRadius: 15,
    // backgroundColor: '#EBF2F4',
    width: 145,
    alignItems: 'stretch'
  }
});
