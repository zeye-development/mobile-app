import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login(props) {

    // console.log(props.navigation)
    // const _onPressSession = () => {
    //     navigate('InicioSesion');
    // }
    // const _onPressRegiste = () => {
    //     navigate('Registro');
    // }
    // console.log(props);
    return (
        <View style={style.container}>

            <View style={style.styleButtonInt}>
                <Text  
                    onPress={ () => props.navigation.navigate('InicioSesion')  }
                    style={style.buttonInit} >Iniciar Sesion</Text>
            </View>
            <View style={style.styleButtonReg}>
                <Text 
                    onPress={ () => props.navigation.navigate('Registro') }  
                    style={style.buttonReg}>Registrarme  <Ionicons name='md-arrow-forward' size={18} color="#0097CD" /> </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        // alignItems: 'center',
        // marginBottom: 20,
        alignItems: 'stretch',
        maxWidth: 350
        
    },
    styleButtonInt: {
        alignItems: 'center',
        marginVertical: 10
    },
    styleButtonReg: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 20
    },
    buttonInit: {
        fontSize: 18,
        paddingVertical: 13,
        paddingHorizontal: 33,
        color: '#fff'
    },
    buttonReg: {
        fontSize: 18,
        paddingVertical: 13,
        paddingHorizontal: 33,
        color: '#0097CD',
    }

   
}); 
