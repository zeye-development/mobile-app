import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Event from './Event';

const { width } = Dimensions.get('window');
export default function Events(props) {
  const users = [
    {
      name: 'Luis',
      id: 1,
      dni: 17283726,
      deteccion: '24/09/2020',
    },
    {
      name: 'Marcos',
      id: 2,
      dni: 34347238,
      deteccion: '05/12/2020',
    },
    {
      name: 'Pedro',
      id: 3,
      dni: 36271872,
      deteccion: '15/01/2020',
    },
    {
      name: 'Pablo',
      id: 4,
      dni: 15263727,
      deteccion: '08/05/2020',
    },
  ];
  const headerTable = width / 4.5;

  separador = () => {
    return (
      <View
        style={{
          marginVertical: 10,
        }}
      ></View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={
          {
            // paddingHorizontal: 10,
            // marginBottom: 10,
            // marginBottom: 15,
          }
        }
      >
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontFamily: 'PoppinsRegular',
              fontSize: 20,
              color: '#00425A',
            }}
          >
            Lista de Eventos
          </Text>

          <Text
            style={{
              fontFamily: 'PoppinsRegular',
              fontSize: 16,
              color: '#e2e2e2',
            }}
          >
            A continuación podra visualizar una lista de los usuarios
            registrados:
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 7,
            backgroundColor: '#f2f2f2',
          }}
        >
          <Text
            style={{
              width: headerTable,
              fontSize: 16,
              fontFamily: 'PoppinsRegular',
            }}
          >
            Codigo
          </Text>
          <Text
            style={{
              width: headerTable,
              fontSize: 16,
              fontFamily: 'PoppinsRegular',
            }}
          >
            Nombre
          </Text>
          <Text
            style={{
              width: headerTable,
              fontSize: 16,
              fontFamily: 'PoppinsRegular',
            }}
          >
            Cedula
          </Text>
          <Text
            style={{
              width: headerTable,
              fontSize: 16,
              fontFamily: 'PoppinsRegular',
            }}
          >
            Detección
          </Text>
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => <Event item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        // ItemSeparatorComponent={separador}
        ListEmptyComponent={
          <Text
            style={{
              marginVertical: 20,
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            No existen usuarios registrados
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 50,
  },
  input: {
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
    padding: 10,
    width: 280,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: '#EBF2F4',
    marginVertical: 5,
    paddingLeft: 10,
  },
  buttomInputRight: {
    backgroundColor: '#0097CD',
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
