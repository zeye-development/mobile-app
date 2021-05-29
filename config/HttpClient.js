import axios from 'axios';
import { AsyncStorage } from 'react-native';

axios.interceptors.request.use(async config => {
  // perform a task before the request is sent
  try {
    const token = await AsyncStorage.getItem("token"); 

    config['headers'] = {
      Authorization: token
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