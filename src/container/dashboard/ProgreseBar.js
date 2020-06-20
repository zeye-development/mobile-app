import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  ProgressBarAndroid,
  Text,
  TouchableOpacity
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { Btn, TextBtn } from './../../styles/ui';

const ProgreseBar = ({ navigation }) => {
  const { users } = useSelector((state) => state.user);
  const maxUsers = 100;
  const percentage = users.length / maxUsers;

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#00DFAA"
          progress={percentage}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PoppinsSemiBold'
          }}
        >
          {' '}
          <Entypo name="users" size={18} color="#fff" />
          { users.length && users.length } de { maxUsers } Usuarios
        </Text>
      </View>

      <Btn>
        <TouchableOpacity onPress={() => navigation.navigate('NuevoUsuario')}>
          <TextBtn color="#0097CD">
            <Ionicons name="md-person-add" size={18} color="#0097CD" />
            Añadir Usuario{' '}
          </TextBtn>
        </TouchableOpacity>
      </Btn>
    </View>
  );
}

export default ProgreseBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 10,
    paddingLeft: 35,
    paddingRight: 35,
    alignItems: 'stretch',
    maxWidth: 450
  },
  viewContainer: {
    paddingBottom: 20
  }
});
