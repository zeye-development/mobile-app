import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";

import Perfil from "./Perfil";

export default function Perfiles(props) {
  // console.log('Users Coincidence: ', props.users);

  let { users } = props;
  for(let i = 0; i < users.people.length; i++){
    if(users.people[i]._id == ''){
        users.people[i]._id = (new Date().getTime()).toString(36) + i;
    }
  }  

  separador = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#f2f2f2",
          marginVertical: 10
        }}
      ></View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users.people}
        renderItem={({ item }) => (
          <Perfil navigation={props.navigation} user={item} />
        )}
        keyExtractor={item => item._id}
        horizontal={false}
        ItemSeparatorComponent={separador}
        ListEmptyComponent={
          <Text
            style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}
          >
            No se encontraron coincidencias
          </Text>
        }
      />   
    </View>
  );
}

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
    color: "#00425A"
  }
});
