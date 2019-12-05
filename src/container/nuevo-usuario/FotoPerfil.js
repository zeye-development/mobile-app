import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginRedes() {
  return (
    <View style={styles.container}>
        <View style={styles.viewContainer}>
            <Image
              style={{width: 120, height: 120}}
              source={require('../../../assets/perfil.png')}
            />
            <Ionicons name='ios-camera' size={30} color="#01B8E2" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'stretch',
    maxWidth: 350
  },
  viewContainer: {
    marginVertical: 5,
    alignItems: 'center',
  },

});
