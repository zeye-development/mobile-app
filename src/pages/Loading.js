import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage} from 'react-native';



export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount () { 

    setTimeout( async () => {
        try {
            let token= await AsyncStorage.getItem('token');
            if(token){
                this.props.navigation.replace ('Dashboard');
            }else{
                this.props.navigation.replace ('Login');

            }
        } catch (error) {
            
        }
    }, 2000);
      

  }

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center',}}>
        <ActivityIndicator size="large" color="#aaf" />
        <Text> Cargando </Text>
      </View>
    );
  }
}

