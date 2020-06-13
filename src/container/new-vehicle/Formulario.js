import React from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as yup from 'yup';
import { Formik } from 'formik';

import { registerVehicleAction } from './../../redux/vehicleDuck';
import LinearGradientComponent from "../../components/shared/LinearGradient";

const Form =  ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSubmitAction = (vehicle) => {
    dispatch(registerVehicleAction(vehicle))
    .then(data => {
      if(data.status === 201) {
        navigation.navigate("Loading");
      }
    })
    .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ 
          plate: '',
          vtype: '',
          manufacturer: '',
          model: '',
          year: ''
        }}
        onSubmit={values => handleSubmitAction(values)}
        validationSchema={yup.object().shape({
          plate: yup
            .string()
            .min(7, 'La placa deben tener 7 caracteres')
            .max(7, 'La placa no puede tener más 7 caracteres')
            .required('La placa del vehículo es requerido'),
          vtype: yup
            .string()
            .required('El tipo de vehículo es requerido'),
          manufacturer: yup
            .string()
            .required('La marca del vehículo es requerido'),
          model: yup
            .string()
            .required('El modelo del vehículo es requerido'),
          year: yup
            .string()
            .required('El año del vehículo es requerido')
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <>
            <View style={styles.viewContainer}>
              <TextInput
                value={values.plate}
                placeholder="Placa"
                onChangeText={handleChange('plate')}
                onBlur={() => setFieldTouched('plate')}
                style={styles.input1}
              />
            </View>
            { 
              touched.plate && errors.plate &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.plate}</Text>
            }

            <View style={styles.viewContainer}>
              <TextInput
                value={values.vtype}
                placeholder="Tipo"
                onChangeText={handleChange('vtype')}
                onBlur={() => setFieldTouched('vtype')}
                style={styles.input1}
              />
            </View>
            { 
              touched.vtype && errors.vtype &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.vtype}</Text>
            }

            <View style={styles.viewContainer}>
              <TextInput
                value={values.manufacturer}
                placeholder="Marca"
                onChangeText={handleChange('manufacturer')}
                onBlur={() => setFieldTouched('manufacturer')}
                style={styles.input1}
              />
            </View>
            { 
              touched.manufacturer && errors.manufacturer &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.manufacturer}</Text>
            }

            <View style={styles.viewContainer}>
              <TextInput
                value={values.model}
                placeholder="Modelo"
                onChangeText={handleChange('model')}
                onBlur={() => setFieldTouched('model')}
                style={styles.input1}
              />
            </View>
            { 
              touched.model && errors.model &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.model}</Text>
            }

            <View style={styles.viewContainer}>
              <TextInput
                value={values.year}
                placeholder="Año"
                onChangeText={handleChange('year')}
                onBlur={() => setFieldTouched('year')}
                style={styles.input1}
              />
            </View>
            { 
              touched.year && errors.year &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.year}</Text>
            }

            <Button
              title='Sign In'
              disabled={!isValid}
              onPress={handleSubmit}
            />
            <LinearGradientComponent
              styles={styles.styleButtom}
            >
              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.inputButtom}>
                  <Ionicons name="md-person-add" size={16} color="#fff" /> Añadir{" "}
                </Text>
              </TouchableOpacity>        
            </LinearGradientComponent>              
          </>
        )}
      </Formik>

      <LinearGradientComponent
        styles={styles.styleButtom}
      >
        <TouchableOpacity onPress={handleSubmitAction}>
          <Text style={styles.inputButtom}>
            <Ionicons name="md-person-add" size={16} color="#fff" /> Añadir{" "}
          </Text>
        </TouchableOpacity>        
      </LinearGradientComponent>  
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
  styleButtom: {
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "stretch",
    backgroundColor: "#0097CD"
  }
});
