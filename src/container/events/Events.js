import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');
const headerTable = width / 4.5;
import styled from 'styled-components/native';

import Event from './Event';

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

  return (
    <View style={styles.container}>
      <View>
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
          <TextHeaderColumn>
            Codigo
          </TextHeaderColumn>
          <TextHeaderColumn>
            Nombre
          </TextHeaderColumn>
          <TextHeaderColumn>
            Cedula
          </TextHeaderColumn>
          <TextHeaderColumn>
            Detección
          </TextHeaderColumn>
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => <Event item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        ListEmptyComponent={
          <TextEmpty>
            No existen usuarios registrados
          </TextEmpty>
        }
      />
    </View>
  );
}

const TextHeaderColumn = styled.Text`
  width: ${headerTable}px;
  font-size: 16px;
  font-family: 'PoppinsRegular';
`;

const TextEmpty = styled.Text`
  margin: 20px 0;
  font-size: 20px;
  text-align: center;
`;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 50,
  }
});
