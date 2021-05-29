import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import styled from 'styled-components/native';

import Perfil from './Perfil';
import PerfilSolicitado from './PerfilSolicitado'
import Separator from './../../components/Separator';

const Profiles = ({ state, navigation }) => {
  const { users } = useSelector(state => state.user);

  let usersWantedFalse = [];

  if (users) {
    usersWantedFalse = users.filter(user => user.wanted == true);
  }

  return (
    <View style={styles.container}>
      { state ? (
        <FlatList
          data={usersWantedFalse}
          renderItem={({ item }) => (
            <PerfilSolicitado navigation={navigation} usuario={item} />
          )}
          keyExtractor={item => item.id}
          horizontal={false}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={
            <TextArrayEmpty>
              No hay usuarios
            </TextArrayEmpty>
          }
        /> ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Perfil navigation={navigation} usuario={item} />
          )}
          keyExtractor={item => item.id}
          horizontal={false}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={
            <TextArrayEmpty>
              No hay usuarios
            </TextArrayEmpty>
          }
        />
      )}
    </View>
  )
}

export default Profiles;

const TextArrayEmpty = styled.Text`
  margin: 20px 0px;
  font-size: 20px;
  text-align: center;
`;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 10
  }
});
