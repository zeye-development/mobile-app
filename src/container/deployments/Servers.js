import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Server from './Server';
export default function Servers(props) {
  const users = [1, 2, 3, 4];

  separador = () => {
    return (
      <View
        style={{
          marginVertical: 10,
        }}
      ></View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: 'PoppinsRegular',
                fontSize: 20,
                color: '#00425A',
              }}
            >
              Deployments
            </Text>

            <Text
              style={{
                fontFamily: 'PoppinsRegular',
                fontSize: 16,
                color: '#e2e2e2',
              }}
            >
              Instances
            </Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.icon}>
              <MaterialCommunityIcons
                name="checkbox-multiple-blank-outline"
                size={42}
                color="#f2f2f2"
              />
            </Text>
          </View>
        </View>

        {/* <View
          style={[
            styles.viewContainer,
            styles.containerInput,
            {
              justifyContent: "space-between",
            },
          ]}
        >
          <View>
            <TextInput
              placeholder="Enter hardware id to add a deployments"
              style={styles.input}
            />
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={["#0097CD", "#01B8E2"]}
              start={[0, 0.8]}
              end={[0.8, 0.5]}
              style={styles.buttomInputRight}
            >
              <MaterialCommunityIcons
                name="cloud-search-outline"
                size={26}
                color="#fff"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View> */}
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => <Server />}
        keyExtractor={(item) => item.toString()}
        horizontal={false}
        ItemSeparatorComponent={separador}
        ListEmptyComponent={
          <Text
            style={{
              marginVertical: 20,
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            No se encuentran Servidores Activos en este momento
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 50,
  },
  input: {
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
    padding: 10,
    width: 280,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainer: {
    borderRadius: 15,
    backgroundColor: '#EBF2F4',
    marginVertical: 5,
    paddingLeft: 10,
  },
  buttomInputRight: {
    backgroundColor: '#0097CD',
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
