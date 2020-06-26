import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from 'app/src/components/Header';
import Events from '../container/events/Events';

export default function Eventos(props) {
  return (
    <View>
      <ScrollView>
        <Header navigation={props.navigation} title='Eventos' />
        <View>
          <Events />
        </View>
      </ScrollView>
    </View>
  );
}
