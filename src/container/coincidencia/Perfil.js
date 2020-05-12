import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import config from './../../../config';

export default function Perfil(props) {
  let {_id, names, surnames, current_face, class: classC, images, birth, wanted } = props.user;

  return (
    classC == 'known' ? 
    <TouchableOpacity
      onPress={() =>  props.navigation.navigate("CoincidenciaUsuario", { user: props.user })}
    >
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 40, height: 40 }}
                source={{uri:`${config.API_URL}/file=${current_face}`}}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 5
              }}
            >
              <AntDesign name="arrowright" size={18} color="#00425A" />
            </View>
            {wanted ? (
              <View style={[styles.img, styles.solicitado]}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{
                    uri: classC == 'known' ? `${config.API_URL}/file=${images[0]}`:
                        `${config.API_URL}/file=${current_face}`
                  }}
                />
              </View>
            ) : (
              <View style={[styles.img, styles.noSolicitado]}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{
                    uri: classC == 'known' ? `${config.API_URL}/file=${images[0]}`:
                        `${config.API_URL}/file=${current_face}`
                  }}
                />
              </View>
            )}
          </View>
          <View style={{ justifyContent: "center", paddingLeft: 10 }}>
            { classC == 'known' ? 
              <>
              <Text style={[styles.textColor, { fontFamily: "PoppinsSemiBold" }]}>
                { names[0] } { surnames[0] }
              </Text>            
              <Text style={[styles.textColor, { fontFamily: "PoppinsRegular" }]}>
                { birth } - { _id }
              </Text>
              </>
              :
              <Text style={[styles.textColor, { fontFamily: "PoppinsSemiBold" }]}>
                Usuario Desconocido
              </Text>              
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
    :
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 40, height: 40 }}
                source={{uri:`${config.API_URL}/file=${current_face}`}}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 5
              }}
            >
              <AntDesign name="arrowright" size={18} color="#00425A" />
            </View>
            {wanted ? (
              <View style={[styles.img, styles.solicitado]}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{
                    uri: classC == 'known' ? `${config.API_URL}/file=${images[0]}`:
                        `${config.API_URL}/file=${current_face}`
                  }}
                />
              </View>
            ) : (
              <View style={[styles.img, styles.noSolicitado]}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{
                    uri: classC == 'known' ? `${config.API_URL}/file=${images[0]}`:
                        `${config.API_URL}/file=${current_face}`
                  }}
                />
              </View>
            )}
          </View>
          <View style={{ justifyContent: "center", paddingLeft: 10 }}>
            { classC == 'known' ? 
              <>
              <Text style={[styles.textColor, { fontFamily: "PoppinsSemiBold" }]}>
                { names[0] } { surnames[0] }
              </Text>            
              <Text style={[styles.textColor, { fontFamily: "PoppinsRegular" }]}>
                { birth } - { _id }
              </Text>
              </>
              :
              <Text style={[styles.textColor, { fontFamily: "PoppinsSemiBold" }]}>
                Usuario Desconocido
              </Text>              
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    justifyContent: "center",
    borderRadius: 100
  },
  textColor: {
    color: "#00425A",
    fontSize: 14
  },
  styleButtom: {
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  solicitado: {
    borderColor: "#FE6363",
    borderWidth: 2
  },
  noSolicitado: {
    borderColor: "#00DFAA",
    borderWidth: 2
  }
});
