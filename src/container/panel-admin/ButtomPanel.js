import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function ButtomPanel(props) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainerGrup}>
        <TouchableOpacity>
          <View
            style={[
              styles.viewContainerInput,
              styles.containerButtom,
              {
                backgroundColor: '#0097CD',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center'
              }
            ]}
          >
            <FontAwesome name="camera" size={12} color="#fff" />
            <Text style={[styles.input1, { color: '#fff' }]}> Face Scan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={[
              styles.viewContainerInput,
              styles.containerButtom,
              {
                backgroundColor: '#fff',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center'
              }
            ]}
          >
            <Ionicons name="md-finger-print" size={16} color="#0097CD" />
            <Text style={[styles.input1, { color: '#0097CD' }]}>
              {' '}
              Two Steps
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 10
  },
  input1: {
    fontSize: 16,
    fontFamily: 'PoppinsBold'
  },
  viewContainerGrup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  viewContainerInput: {
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 140
  },
  containerButtom: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});
