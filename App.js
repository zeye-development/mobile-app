import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { StackRouter } from 'react-navigation';

import Principal from './src/pages/Principal';
import InicioSesion from "./src/pages/InicioSesion";
import Registro from './src/pages/Registro';
import NuevoUsuario from './src/pages/NuevoUsuario';
import EditarUsuario from './src/pages/EditarUsuario';
import RecuperarPaso1 from './src/pages/RecuperarPaso1';
import RecuperarPaso2 from './src/pages/RecuperarPaso2';
import Captura from './src/pages/Captura';
import Dashboard from './src/pages/Dashboard';


// const AppNavigator = createSwitchNavigator({
//   Home: { 
//     screen: Principal,
//   },
// });

// export default createAppContainer(AppNavigator);

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Principal / > */}
      {/* <InicioSesion />  */}
      {/* <Registro /> */} 
      {/* <NuevoUsuario />  */}
      {/* <EditarUsuario /> */}
      {/* <RecuperarPaso1 /> */}
      {/* <RecuperarPaso2 /> */}
      {/* <Captura /> */}
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff'
  },
});
