import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../container/events/Header';
import Events from '../container/events/Events';

export default function Eventos(props) {
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#0097CD', '#01B8E2']}
          start={[0, 0.8]}
          end={[0.8, 0.5]}
          style={styles.containerSuperior}
        >
          <Header />
        </LinearGradient>
        <View>
          <Events />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSuperior: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
