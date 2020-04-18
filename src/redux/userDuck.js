import axios from 'axios';
import config from './../../config';

// constanst
let initialData = {
  loggedIn: false,
  fetching: false,
  user: {
    name: 'Carl'
  }
}

let LOGIN             = "LOGIN";
let LOGIN_SUCCESS     = "LOGIN_SUCCESS";
let LOGIN_ERROR       = "LOGIN_ERROR";

let REGISTER          = "REGISTER";
let REGISTER_SUCCESS  = "REGISTER_SUCCESS";
let REGISTER_ERROR    = "REGISTER_ERROR";

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
        user: response.data.account_data,
        token: response.data.token
      }
    })

    return response;
  } catch (error) {
    console.log('Error Login: ', error);
    dispatch({
      type: LOGIN_ERROR,
      payload: error.message
    })
    return error;
  }
}

export const registerAction = (form) => async (dispatch, getState) => {
  console.log('Register: ', form)
  dispatch({
    type: REGISTER,
  })

  try {
    const response = await axios.post(`${config.API_URL}/register`, form);
    console.log('Success Register: ', response.data)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        user: response.data.data.user,
        token: response.data.data.token
      }
    })

    return response;
  } catch (error) {
    console.log('Error Register: ', error);
    dispatch({
      type: REGISTER_ERROR,
      payload: error.message
    })

    return error;
  }
}
