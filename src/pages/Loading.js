import React, { Component } from 'react';
import { View, Image, AsyncStorage, StyleSheet} from 'react-native';



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
                this.props.navigation.replace ('Home');

            }
        } catch (error) {
            
        }
    }, 2000);
      

  }

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center',}}>
      <Image source={require('../../assets/quantic.jpg')} resizeMode="contain" style={styles.splash} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash:{
    width:'50%',
    height:'50%',
  }
})