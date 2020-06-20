import axios from 'axios';
import config from './../../config';
import { AsyncStorage } from 'react-native';

// constanst
let initialData = {
  loggedIn: false,
  fetching: false,
  user: {},
  userDetail: {},
  users: []
}

const LOGIN             = 'LOGIN';
const LOGIN_SUCCESS     = 'LOGIN_SUCCESS';
const LOGIN_ERROR       = 'LOGIN_ERROR';

const REGISTER          = 'REGISTER';
const REGISTER_SUCCESS  = 'REGISTER_SUCCESS';
const REGISTER_ERROR    = 'REGISTER_ERROR';

const GET_USERS          = 'GET_USERS';
const GET_USERS_SUCCESS  = 'GET_USERS_SUCCESS';
const GET_USERS_ERROR    = 'GET_USERS_ERROR';

const SAVE_USER_STORE  = 'SAVE_USER_STORE';
const SAVE_USERS_STORE  = 'SAVE_USERS_STORE';

// reducer
export default function reducer(state = initialData, action){
  switch(action.type){
  case LOGIN_SUCCESS:
    return { ...state, fetching: false, ...action.payload }
  case LOGIN_ERROR:
    return { ...state, fetching: false, error: action.payload }
  case LOGIN:
    return { ...state, fetching: true }

  case REGISTER:
    return { ...state, fetching: true }
  case REGISTER_SUCCESS:
    return { ...state, fetching: false, ...action.payload }
  case REGISTER_ERROR:
    return { ...state, fetching: false, error: action.payload }

  case SAVE_USER_STORE:
    return { ...state, userDetail: action.payload }

  case SAVE_USERS_STORE:
    return { ...state, users: action.payload }

  default:
    return state
  }
}

export const loginAction = (form) => async (dispatch, getState) => {
  dispatch({
    type: LOGIN,
  })

  try {
    const response = await axios.post(`${config.API_URL}/login`, form);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: response.data,
        token: response.data.token
      }
    })
    AsyncStorage.setItem('token', response.data.token);
    // console.log('response login: ', response);
    return response;
  } catch (error) {
    // console.log('Error Login: ', error);
    dispatch({
      type: LOGIN_ERROR,
      payload: error.message
    })
    return error;
  }
}

export const registerAccountZeyeAction = (form) => async (dispatch, getState) => {
  // console.log('registerAccountZeyeAction: ', form)
  dispatch({
    type: REGISTER,
  })

  try {
    const response = await axios.post(`${config.API_URL}/user`, form);
    // console.log('Success registerAccountZeyeAction: ', response.data)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        user: response.data.data.account_data,
        token: response.data.data.token
      }
    })

    return response;
  } catch (error) {
    // console.log('Error registerAccountZeyeAction: ', error);
    dispatch({
      type: REGISTER_ERROR,
      payload: error.message
    })

    return error;
  }
}

export const getUsersAction = () => async (dispatch) => {
  // console.log('Get All users: ', )
  // dispatch({
  //   type: GET_USERS,
  // })

  try {
    const response = await axios.get(`${config.API_URL}/known`);
    // console.log('Get All users: ', response.data)
    // dispatch({
    //   type: GET_USERS_SUCCESS,
    //   payload: {
    //     user: response.data.data.account_data,
    //     token: response.data.data.token
    //   }
    // })
    dispatch({
      type: SAVE_USERS_STORE,
      payload: response.data.data
    });
    return response;
  } catch (error) {
    console.log('Error All users: ', error);
    // dispatch({
    //   type: GET_USERS_ERROR,
    //   payload: error.message
    // })

    return error.response;
  }
}

export const saveUserToStoreAction = (data) => (dispatch) => {
  dispatch({
    type: SAVE_USER_STORE,
    payload: data
  })
}

export const saveUsersToStoreAction = (data) => (dispatch) => {
  dispatch({
    type: SAVE_USERS_STORE,
    payload: data
  })
}
