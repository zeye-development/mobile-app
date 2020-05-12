import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet } from "react-native";
import styled from 'styled-components/native';

import { getUsersAction } from './../redux/userDuck';

const Loading = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction())
      .then(data => {
        if(data.status === 200) {
          navigation.replace("Dashboard");
        }
      })
      .catch(() => navigation.replace("InicioSesion"))
  }, [])

  return (
    <Container>
      <Image
        source={require("../../assets/quantic.jpg")}
        resizeMode="contain"
        style={styles.splash}
      />
    </Container>
  );
}

export default Loading;

// class Loading extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   async componentDidMount() {
//     let token = await AsyncStorage.getItem("token");

//     if (!token) this.props.navigation.replace("Principal");

//     try {
//       token = token.replace(/['"]+/g, "");
//       fetch(`${config.API_URL}/known_person`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           key: token,
//           all: "yes"
//         }
//       })
//         .then(response => response.json())
//         .then(responseJson => {

//           if (responseJson.status == 200 && responseJson.data.length != 0) {
//             if (token) {
//               this.props.saveUsersToStoreAction(responseJson.data)

//               this.props.navigation.replace("Dashboard", {
//                 users: responseJson.data,
//                 cantidad: responseJson.persons_length
//               });
//             } else {
//               this.props.navigation.replace("InicioSesion");
//             }
//           } else {
//             this.props.navigation.replace("Dashboard");
//           }
//         })
//         .catch(error => console.error('Loading Error: ', error));

//     } catch (error) {
//     }
//   }

//   render() {
//     return (
//       <Container>
//         <Image
//           source={require("../../assets/quantic.jpg")}
//           resizeMode="contain"
//           style={styles.splash}
//         />
//       </Container>
//     );
//   }
// }

// const mapDispatchToProps = ({
//   saveUsersToStoreAction
// })

// export default connect(null, mapDispatchToProps)(Loading);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  splash: {
    width: "45%",
    height: "45%"
  }
});
