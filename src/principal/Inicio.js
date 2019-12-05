import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Inicio() {

    const _onPressButton = () => {
        alert('Has dado un click')
    }
    
    return (
        <View style={style.container}>
           <Text style={style.text}>Quantic Anality</Text>
        </View>
    )
}
const style = StyleSheet.create({

    container: {
        flex: 4,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: '#fff',
        padding: 5
    }
}); 
