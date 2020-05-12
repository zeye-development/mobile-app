import axios from 'axios';
import { AsyncStorage } from 'react-native';

// declare a request interceptor
axios.interceptors.request.use(async config => {
  // perform a task before the request is sent
  try {
    const token = await AsyncStorage.getItem("token"); 

    config['headers'] = {
      Authorization: `Bearer ${token}`,
    };
    return config;    
  } catch (error) {
    return error;
  }
}, error => {
  // handle the error
  return Promise.reject(error);
});

export default axios;