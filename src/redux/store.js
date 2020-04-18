import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './userDuck';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  user: userReducer,
})

const generateStore = () => {
  console.log('Store creared')
  let store = createStore(rootReducer, applyMiddleware(thunk))
  return store;
}

export default generateStore;