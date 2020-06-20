import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text } from './../../styles/ui';

export default function Preguntas(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('RecuperarPaso1')}
      >
        <View style={styles.viewContainer}>
          <Text color='#01B8E2'>
            ¿Has olvidado tu contraseña?
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.viewContainer}>
        <Text color='#00425A' fontSize='14px'>¿Aun no tienes cuenta?</Text>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate('Registro')}>
        <View style={styles.viewContainer}>
          <Text color='#00425A'>
            Registrate{' '}
            <Ionicons name="md-arrow-forward" size={16} color="#00425A" />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 450,
    alignItems: 'stretch',
    paddingHorizontal: 30
  },
  viewContainer: {
    alignItems: 'center',
    padding: 8
  }
});
