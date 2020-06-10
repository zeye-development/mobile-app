import React from 'react';
import { useSelector } from "react-redux";
import { View, StyleSheet, FlatList, Text } from "react-native";
import Perfil from "./Perfil";
import PerfilSolicitado from "./PerfilSolicitado"
import Separator from './../../components/Separator';

const Profiles = ({ state, navigation }) => {
  const { vehicles } = useSelector(state => state.vehicle);
  console.log('asdasd, ', vehicles)

  if(!vehicles.length) return false;

  return (
    <View style={styles.container}>
      { state ? (
        <FlatList
          data={usersWantedFalse}
          renderItem={({ item }) => (
            <PerfilSolicitado navigation={navigation} usuario={item} />
          )}
          keyExtractor={item => item._id}
          horizontal={false}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={
            <Text
              style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
            >
              No tienes vehículos registrados
            </Text>
          }
        /> ) : (
          <FlatList
            data={vehicles}
            renderItem={({ item }) => (
              <Perfil navigation={navigation} usuario={item} />
            )}
            keyExtractor={item => item._id.$oid}
            horizontal={false}
            ItemSeparatorComponent={Separator}
            ListEmptyComponent={
              <Text
                style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
              >
                No tienes vehículos registrados
              </Text>
            }
          />
        )}
    </View>
  )
}

export default Profiles;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 10
  },
  containerPerfil: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    justifyContent: "center",
    borderRadius: 100
  },
  textColor: {
    color: "#E1868F"
  }
});
