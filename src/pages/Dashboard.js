import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "../container/dashboard/Header";
import ProgreseBar from "../container/dashboard/ProgreseBar";
import Opciones from "../container/dashboard/Opciones";
import Perfiles from "../container/dashboard/Perfiles";

const Dashboard = ({ navigation  }) => {

  const [state, setState] = useState(false);

  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={["#0097CD", "#01B8E2"]}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.containerSuperior}
        >
          <Header navigation={navigation} />
          <ProgreseBar navigation={navigation} />
          <Opciones
            navigation={navigation}
            CambiarEstado={state => setState(state)}
          />
        </LinearGradient>

        <View>
          <Perfiles
            navigation={navigation}
            estado={state}
          />
        </View>
      </ScrollView>
    </View>    
  )
}

export default Dashboard;

const styles = StyleSheet.create({
  containerSuperior: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
});
