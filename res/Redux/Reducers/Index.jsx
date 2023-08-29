import {useReducer} from 'react';
import {combineReducers} from 'redux';
import {
  ordersReducer,
  registerUserReducer,
  servicesReducer,
  userReducer,
} from './Reducers';

export const reducers = combineReducers({
  userStatus: userReducer,
  registerUser: registerUserReducer,
  orders: ordersReducer,
  services: servicesReducer,
});
