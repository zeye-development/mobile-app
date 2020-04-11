import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
export default function Event(props) {
  const headerTable = width / 4.5;
  const { id, name, dni, deteccion } = props.item;
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        borderColor: "#f2f2f2",
        borderWidth: 1,
      }}
    >
      <Text style={{ width: headerTable, fontFamily: "PoppinsRegular" }}>
        {id}
      </Text>
      <Text style={{ width: headerTable, fontFamily: "PoppinsRegular" }}>
        {name}
      </Text>
      <Text style={{ width: headerTable, fontFamily: "PoppinsRegular" }}>
        {dni}
      </Text>
      <Text style={{ width: headerTable, fontFamily: "PoppinsRegular" }}>
        {deteccion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
