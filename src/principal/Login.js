import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

export default function Login() {

    const _onPressButton = () => {
        alert('has dadp un click')
    }
    
    return (
        <View style={style.container}>

            <View style={style.styleButtonContainer}>
                <Text onPress={_onPressButton} style={style.buttonInit} >Iniciar Sesion</Text>
            </View>
            <View style={style.styleButtonContainer}>
                <Text style={style.buttonReg}>Registrate</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        marginBottom: 20
    },
    styleButtonContainer: {
        alignItems: 'center'
    },
    buttonReg: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'blue',
        backgroundColor: '#fff',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    buttonInit: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#fff',
        backgroundColor: 'blue',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 10
    }
}); 
