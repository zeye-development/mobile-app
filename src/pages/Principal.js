import React from 'react';
import { StyleSheet, View } from 'react-native';

import Login from '../container/principal/Login';
import { Text } from '../styles/ui';
import LinearGradientComponent from './../components/shared/LinearGradient';

export default function Principal(props) {
  return (
    <LinearGradientComponent styles={styles.container}>
      <View style={styles.containerHeader}>
        <Text fontSize='32px' fontFamily='PoppinsMedium'>
          Zeye Cloud ®
        </Text>
      </View>

      <Login navigation={props.navigation} />
    </LinearGradientComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
