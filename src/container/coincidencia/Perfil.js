import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Perfil(props) {
  let {_id, names, surnames, current_face, images, birth, wanted } = props.user;
  console.log(props.user)

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("CoincidenciaUsuario")}
    >
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 40, height: 40 }}
                source={{uri:`http://189.213.227.211:8443/file=${current_face}`}}           
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
                  source={{uri:`http://189.213.227.211:8443/file=${images[0]}`}}
                />
              </View>
            ) : (
              <View style={[styles.img, styles.noSolicitado]}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{uri:`http://189.213.227.211:8443/file=${images[0]}`}}
                />
              </View>
            )}
          </View>
          <View style={{ justifyContent: "center", paddingLeft: 10 }}>
            <Text style={[styles.textColor, { fontFamily: "PoppinsSemiBold" }]}>
              { names[0] } { surnames[0] }
            </Text>
            <Text style={[styles.textColor, { fontFamily: "PoppinsRegular" }]}>
              { birth } - { _id }
            </Text>
          </View>
        </View>
        {/* <View style={styles.styleButtom}>
          <Ionicons name="md-more" size={18} color="#00425A" />
        </View> */}
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
