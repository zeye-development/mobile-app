import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from 'app/src/styles/ui';

export default function Inicio() {
  return (
    <View style={style.container}>
      <Text fontSize='32px' fontFamily='PoppinsMedium'>
        Zeye Cloud ®
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
