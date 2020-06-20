import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Header from '../container/dashboard/Header';
import ProgreseBar from '../container/dashboard/ProgreseBar';
import Opciones from '../container/dashboard/Opciones';
import Perfiles from '../container/dashboard/Perfiles';
import LinearGradientComponent from './../components/shared/LinearGradient';

const Dashboard = ({ navigation  }) => {

  const [state, setState] = useState(false);

  return (
    <View>
      <ScrollView>
        <LinearGradientComponent styles={styles.containerSuperior}>
          <Header navigation={navigation} />
          <ProgreseBar navigation={navigation} />
          <Opciones
            navigation={navigation}
            CambiarEstado={state => setState(state)}
          />
        </LinearGradientComponent>

        <View>
          <Perfiles
            navigation={navigation}
            state={state}
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
