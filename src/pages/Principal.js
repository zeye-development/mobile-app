import React from "react";
import { StyleSheet, SectionList, ScrollView, View, Text } from "react-native";

import Inicio from "../container/principal/Inicio";
import Login from "../container/principal/Login";
export default function Principal(props) {
  return (
    <View style={styles.container}>
      {/* <SectionList
        sections={[<Inicio />, <Login />]}
        renderItem={item => console.log(item)}
        // renderSectionHeader={({ section }) => (
        //   <Text style={styles.sectionHeader}>{section.title}</Text>
        // )}
        keyExtractor={(item, index) => index}
      /> */}
      <Inicio />
      <Login navigation={props.navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0097CD",
    padding: 30
  }
});
