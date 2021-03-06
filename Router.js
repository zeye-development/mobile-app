import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as Font from "expo-font";
import { AppLoading } from "expo";

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
import Coincidencias from "./src/pages/Coincidencias";
import CoincidenciaUsuario from "./src/pages/CoincidenciaUsuario";
import BuscarCoincidencia from "./src/pages/BuscarCoincidencia";
import Loading from "./src/pages/Loading";
import Galeria from "./src/pages/Galeria";
import Deployments from "./src/pages/Deployments";
import Events from "./src/pages/Eventos";

import Camera from "./Camera";

const AppNavigator = createStackNavigator(
  {
    Principal: {
      screen: Principal,
    },
    Home: {
      screen: Principal,
    },
    InicioSesion: {
      screen: InicioSesion,
    },
    Registro: {
      screen: Registro,
    },
    NuevoUsuario: {
      screen: NuevoUsuario,
    },
    EditarUsuario: {
      screen: EditarUsuario,
    },
    UsuarioRequerido: {
      screen: UsuarioRequerido,
    },
    RecuperarPaso1: {
      screen: RecuperarPaso1,
    },
    RecuperarPaso2: {
      screen: RecuperarPaso2,
    },
    Captura: {
      screen: Captura,
    },
    Dashboard: {
      screen: Dashboard,
    },
    PanelAdmin: {
      screen: PanelAdmin,
    },
    Coincidencias: {
      screen: Coincidencias,
    },
    CoincidenciaUsuario: {
      screen: CoincidenciaUsuario,
    },
    BuscarCoincidencia: {
      screen: BuscarCoincidencia,
    },
    Loading: {
      screen: Loading,
    },
    Galeria: {
      screen: Galeria,
    },
    Deployments: {
      screen: Deployments,
    },
    Events: {
      screen: Events,
    },
  },
  {
    initialRouteName: "Principal",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      headerleft: null,
    },
  }
);

export default createAppContainer(AppNavigator);
