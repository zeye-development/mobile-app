import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Header = styled.View`
  height: 10%;
  width: 100%;
  background-color: #0097CD;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.Text`
  color: #FFF;
  font-family: 'PoppinsRegular';
  margin-top: 30px;
  font-size: 17px;
`;

const Link = styled.Text`
  margin-top: 15px;
  padding: 10px 30px;
  font-size: 17px;
  font-family: 'PoppinsRegular';  
`;

const Menu = ({ navigation }) => {
  return (
    <View style={{ height: '100%', alignItems: 'center' }}>
      <Header>
        <HeaderTitle>Menu</HeaderTitle>
      </Header>

      <Link onPress={() => navigation.navigate('Dashboard')}>
        <Ionicons name="md-list-box" size={18} color="#0097CD" /> Dashboard
      </Link>
      <Link>
        <Ionicons name="md-contacts" size={18} color="#0097CD" /> Usuarios
      </Link>
      <Link onPress={() => navigation.navigate('Events')}>
        <Ionicons name="md-bookmarks" size={18} color="#0097CD" /> Eventos
      </Link>

      <Link>
        <Ionicons name="md-camera" size={18} color="#0097CD" /> Camaras
      </Link>
      <Link>
        <Ionicons name="md-settings" size={18} color="#0097CD" /> Configuración
      </Link>
      <Link>
        <Ionicons name="md-phone-portrait" size={18} color="#0097CD" /> Dispositivos
      </Link>
      <Link>
        <Ionicons name="md-contact" size={18} color="#0097CD" /> Cuentas
      </Link>
      <Link>
        <Ionicons name="md-log-out" size={18} color="#0097CD" /> Salir
      </Link>
    </View>
  );
}

export default Menu;
