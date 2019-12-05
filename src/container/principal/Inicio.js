import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Inicio() {

    
    return (
        <View style={style.container}>
           <Text style={style.text}>Quantic Analytic</Text>
        </View>
    )
}
const style = StyleSheet.create({

    container: {
        flex: 2,
        // flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 110,
        // maxWidth: 350,
    },
    text: {
        fontSize: 35,
        textAlign: 'center',
        color: '#fff',
        padding: 5
    }
}); 
