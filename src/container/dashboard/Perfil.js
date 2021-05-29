import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import config from './../../../config';

const Profile = ({ navigation, usuario }) => {

  let { id, identification_number, names, surnames, face_encoding, birth_date } = usuario;

  const [click, setClick] = useState(false)

  onChangeMenu = () => {
    if (click) {
      setClick( false )
    }
    if (!click) {
      setClick( true )
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.img}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{ uri: `${config.API_URL}/encodings/${face_encoding.id}/image` }}
            />
          </View>
          <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
            <Text
              style={[
                styles.textColor,
                {
                  fontFamily: 'PoppinsSemiBold'
                }
              ]}
            >
              {names}{' '} {surnames}
            </Text>
            <Text
              style={[
                styles.textColor2,
                {
                  fontFamily: 'PoppinsRegular'
                }
              ]}
            >
              {identification_number} {birth_date}
            </Text>
          </View>
        </View>
        {!click ? (
            <TouchableOpacity onPress={onChangeMenu}>
              <View style={styles.styleButtom}>
                <Ionicons name="md-more" size={18} color="#00425A" />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onChangeMenu}>
              <View style={styles.styleButtom}>
                <Ionicons name="md-close" size={18} color="#00425A" />
              </View>
            </TouchableOpacity>
          )}
      </View>

      {click ? (
        <View style={styles.containerOptionButtom}>
          <View style={styles.containerButtom}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UsuarioRequerido', { user: usuario })}
            >
              <Text style={styles.optionButtom}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Galeria', { id, images: [] })}
            >
              <Text style={styles.optionButtom}>Galería</Text>
            </TouchableOpacity>
          </View>
        </View>
        ) : null}
    </View>
  )
}

export default Profile

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
    color: '#00425A',
    fontSize: 14
  },
  textColor2: {
    color: '#00425A',
    fontSize: 15
  },
  styleButtom: {
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  optionButtom: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
    fontFamily: 'PoppinsRegular',
    fontSize: 12
  },
  containerOptionButtom: {
    position: 'absolute',
    right: 25,
    top: 0
  },
  containerButtom: {
    top: -10,
    height: 70,
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});
