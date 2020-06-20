import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Server(props) {
  return (
    <View style={{ borderColor: '#f2f2f2', borderWidth: 1 }}>
      <View
        style={[
          styles.rowHeader,
          {
            backgroundColor: '#f2f2f2',
            padding: 6,
          },
        ]}
      >
        <Text style={styles.typeFont}>ZEYE Server</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Text style={styles.bottonReg}>Online</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottonCircle}>
            <Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                color="#00425A"
                size={23}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          <FontAwesome5 name="server" color="#00425A" size={60} />
        </View>
        <View
          style={[
            styles.rowHeader,
            { backgroundColor: '#f2f2f2', paddingHorizontal: 10 },
          ]}
        >
          <Text style={styles.typeFont}>ID</Text>
          <Text style={styles.typeFont}>98498379857497597</Text>
        </View>
        <View style={[styles.rowHeader, { paddingHorizontal: 10 }]}>
          <Text style={styles.typeFont}>Location</Text>
          <Text style={styles.typeFont}>8585</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    justifyContent: 'center',
    borderRadius: 100,
  },
  textColor: {
    color: '#00425A',
    fontSize: 14,
  },
  styleButtom: {
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  solicitado: {
    borderColor: '#FE6363',
    borderWidth: 2,
  },
  noSolicitado: {
    borderColor: '#00DFAA',
    borderWidth: 2,
  },
  typeFont: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    color: '#00425A',
  },
  bottonCircle: {
    borderRadius: 50,
    paddingHorizontal: 1,
    borderWidth: 1,
    borderColor: '#01B8E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonReg: {
    padding: 3,
    backgroundColor: '#00DFAA',
    borderRadius: 5,
    marginHorizontal: 5,
    color: '#fff',
  },
});
