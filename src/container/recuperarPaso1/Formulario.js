import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import LinearGradientComponent from '../../components/shared/LinearGradient';

export default function Formulario({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <TextInput placeholder="Email" style={styles.input} />
      </View>

      <LinearGradientComponent styles={styles.styleButtom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RecuperarPaso2')}
        >
          <Text style={styles.inputButtom}>
            Continuar{' '}
            <Ionicons name="md-arrow-forward" size={18} color="#fff" />
          </Text>
        </TouchableOpacity>
      </LinearGradientComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'stretch',
    maxWidth: 450,
    paddingHorizontal: 30
  },
  inputButtom: {
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
    padding: 13,
    color: '#fff',
    textAlign: 'center'
  },
  input: {
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
    paddingVertical: 13,
    paddingHorizontal: 33
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: '#EBF2F4',
    marginVertical: 5
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'stretch',
    backgroundColor: '#0097CD'
  },
  viewContainerCheck: {
    padding: 13,
    color: '#EBF2F4',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 15
  }
});
