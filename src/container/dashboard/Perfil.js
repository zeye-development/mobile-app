import React from 'react';
import  { View, StyleSheet, Image,Text } from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';

export default function Perfil(props) {
    let {nombre, conectado, edad} = props.usuario;
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image
                    style={{width: 50, height: 50}}
                    source={require('../../../assets/perfil.png')}
                    />
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 10}}>
                    <Text style={styles.textColor}>{nombre}  <Foundation name='prohibited' size={16} color='#00425A' /></Text>
                    <Text style={styles.textColor}>{edad} - {conectado}</Text>
                </View>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Ionicons name='md-more' size={18} color='#00425A' />
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        justifyContent: 'center', 
        borderRadius: 100
    },
    textColor: {
        color: '#00425A'
    }
});