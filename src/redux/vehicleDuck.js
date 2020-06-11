import axios from 'axios';
import config from './../../config';

// constanst
let initialData = {
  loggedIn: false,
  fetching: false,
  vehicle: {},
  vehicleDetail: {},
  vehicles: []
}

const GET_VEHICLES          = "GET_VEHICLES";
const GET_VEHICLES_SUCCESS  = "GET_VEHICLES_SUCCESS";
const GET_VEHICLES_ERROR    = "GET_VEHICLES_ERROR";

const SAVE_VEHICLE          = "SAVE_VEHICLE";
const SAVE_VEHICLE_SUCCESS  = "SAVE_VEHICLE_SUCCESS";
const SAVE_VEHICLE_ERROR    = "SAVE_VEHICLE_ERROR";

// reducer
export default function reducer(state = initialData, action){
  switch(action.type){
    case GET_VEHICLES:
      return { ...state, fetching: true }
    case GET_VEHICLES_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case GET_VEHICLES_SUCCESS:
      return { ...state, fetching: false, vehicles: action.payload }

    case SAVE_VEHICLE:
      return { ...state, fetching: true }
    case SAVE_VEHICLE_SUCCESS:
      return { ...state, fetching: false }      
    case SAVE_VEHICLE_ERROR:
      return { ...state, fetching: false, error: action.payload }

      default:
      return state
  }
}

export const getVehiclesAction = () => async (dispatch, getState) => {
  dispatch({
    type: GET_VEHICLES,
  })

  try {
    const response = await axios.get(`${config.API_URL}/vehicle`);
    dispatch({
      type: GET_VEHICLES_SUCCESS,
      payload: response.data.data,
    })
    // console.log('Response Get vehicles: ', response.data);
    return response;
  } catch (error) {
    console.log('Error Get vehicles: ', error);
    dispatch({
      type: GET_VEHICLES_ERROR,
      payload: error.message
    })

    return error;
  }
}

export const registerVehicleAction = (form) => async (dispatch, getState) => {
  console.log('holis: ', form)
  dispatch({
    type: SAVE_VEHICLE,
  })

  // let form = {
  //   'plate':'AA56GH1', 
  //    'vtype':'CAR',
  //    'manufacturer':'FORD',
  //    'model':'FIESTA',
  //    'year':2002
  // }

  try {
    const response = await axios.post(`${config.API_URL}/vehicle`, form);
    console.log('Success save vehicle: ', response.data)
    dispatch({
      type: SAVE_VEHICLE_SUCCESS,
      payload: 'Vehículo registrado con exito'
    })

    return response;
  } catch (error) {
    // console.log('Success error vehicle: ', error.response)    
    dispatch({
      type: SAVE_VEHICLE_ERROR,
      payload: error.message
    })

    return error;
  }
}