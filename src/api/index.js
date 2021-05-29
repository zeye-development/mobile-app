import axios from 'axios';
// TODO: use new library
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorage } from 'react-native';

const baseURL = 'https://api.zeye.io';
const zeyeApi = axios.create({ baseURL });

zeyeApi.interceptors.request.use(
  async(config) => {
    const token = await AsyncStorage.getItem('token');
    
    if ( token ) {
      config.headers['Authorization'] = token;
    }
    return config;
  }
);

export default zeyeApi;
