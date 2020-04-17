import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from 'styled-components/native';

export default function Header({ navigation, title, btnClose = true }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.icon}>
          {" "}
          <Ionicons name="md-arrow-back" size={20} color="#00425A" />{" "}
        </Text>
      </TouchableOpacity>

      <HeaderTitle>{ title }</HeaderTitle>

      {
        btnClose ?
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.icon}>
              <Ionicons name="md-close" size={20} color="#00425A" />
            </Text>
          </TouchableOpacity>
        : <Text style={styles.icon}> </Text>
      }
    </View>
  );
}

const HeaderTitle = styled.Text`
  color: #00425A;
  font-size: 14px;
  font-family: 'PoppinsSemiBold';
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    maxWidth: 450,
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingTop: 50,
    // paddingLeft: 30,
    // paddingRight: 30,
    // paddingBottom: 10,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 30    
  },
  icon: {
    padding: 6
  }
});
