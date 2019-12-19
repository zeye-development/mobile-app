import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Principal from "./src/pages/Principal";
import InicioSesion from "./src/pages/InicioSesion";
import Registro from "./src/pages/Registro";
import NuevoUsuario from "./src/pages/NuevoUsuario";
import EditarUsuario from "./src/pages/EditarUsuario";
import UsuarioRequerido from "./src/pages/UsuarioRequerido";
import RecuperarPaso1 from "./src/pages/RecuperarPaso1";
import RecuperarPaso2 from "./src/pages/RecuperarPaso2";
import Captura from "./src/pages/Captura";
import Dashboard from "./src/pages/Dashboard";
import PanelAdmin from "./src/pages/PanelAdmin";
import Loading from "./src/pages/Loading";

// import Camera from "./Camera";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Principal
    },
    InicioSesion: {
      screen: InicioSesion
    },
    Registro: {
      screen: Registro
    },
    NuevoUsuario: {
      screen: NuevoUsuario
    },
    EditarUsuario: {
      screen: EditarUsuario
    },
    UsuarioRequerido: {
      screen: UsuarioRequerido
    },
    RecuperarPaso1: {
      screen: RecuperarPaso1
    },
    RecuperarPaso2: {
      screen: RecuperarPaso2
    },
    Captura: {
      screen: Captura
    },
    Dashboard: {
      screen: Dashboard
    },
    PanelAdmin: {
      screen: PanelAdmin
    },
    Loading: {
      screen: Loading
    }
  },
  {
    initialRouteName: "Loading",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      headerleft: null
    }
  }
);

export default createAppContainer(AppNavigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Principal / > */}
//       {/* <InicioSesion />  */}
//       {/* <Registro /> */}
//       {/* <NuevoUsuario /> */}
//       {/* <UsuarioRequerido /> */}
//       {/* <RecuperarPaso1 /> */}
//       {/* <RecuperarPaso2 /> */}
//       {/* <Captura /> */}
//       {/* <Dashboard /> */}
//       {/* <Camera /> */}
//       {/* <EditarUsuario /> */}
//       <PanelAdmin />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 6,
//     backgroundColor: "#fff"
//   }
// });
