import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { registerVehicleAction } from './../../redux/vehicleDuck';

const Form =  ({ navigation }) => {
  const dispatch = useDispatch();

  const [plate, setPlate] = useState('');
  const [vtype, setVtype] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = () => {
    dispatch(registerVehicleAction({
      plate,
      vtype,
      manufacturer,
      model,
      year
    }))
    .then(data => {
      if(data.status === 201) {
        navigation.navigate("Loading");
      }
    })
    .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      {/* ========================================================== */}
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input1}
          placeholder="Placa"
          value={plate}
          onChangeText={text => setPlate(text)}
        />
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input1}
          placeholder="Tipo"
          value={vtype}
          onChangeText={text => setVtype(text)}
        />
      </View>   
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input1}
          placeholder="Marca Vehículo"
          value={manufacturer}
          onChangeText={text => setManufacturer(text)}
        />
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input1}
          placeholder="Modelo del Vehículo"
          value={model}
          onChangeText={text => setModel(text)}
        />
      </View>
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.input1}
          placeholder="Año del Vehículo"
          value={year}
          onChangeText={text => setYear(text)}
        />
      </View>
      <LinearGradient
        colors={["#0097CD", "#01B8E2"]}
        start={[0, 0.8]}
        end={[0.8, 0.5]}
        style={styles.styleButtom}
      >
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.inputButtom}>
            <Ionicons name="md-person-add" size={16} color="#fff" /> Añadir{" "}
          </Text>
        </TouchableOpacity>
      </LinearGradient>      
    </View>
  );

}

export default Form;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: "stretch",
    maxWidth: 450,
    paddingHorizontal: 30
  },
  input: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 33,
    fontFamily: "PoppinsRegular"
  },
  input1: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginRight: 13,
    fontFamily: "PoppinsRegular"
  },
  inputButtom: {
    fontSize: 16,
    padding: 13,
    color: "#fff",
    textAlign: "center",
    fontFamily: "PoppinsRegular"
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginVertical: 5
  },
  viewContainerGrup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 15
  },
  viewContainerInput: {
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    width: 140
  },
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "stretch",
    backgroundColor: "#0097CD"
  },
  viewContainerCheck: {
    flexDirection: "row",
    padding: 13,
    color: "#EBF2F4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
    marginBottom: 15
  },
  containerpicker: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#EBF2F4",
    marginBottom: 5
  },
  picker: {
    width: "100%",
    height: 50,
    marginLeft: "2%",
    color: "black",
    alignItems: "center"
  },
  imagenesSubir: {
    width: 50,
    marginHorizontal: 3,
    height: 50,
    backgroundColor: "#EBF2F4",
    alignItems: "center",
    justifyContent: "center"
  }
});
