import {useReducer} from 'react';
import {combineReducers} from 'redux';
import {ordersReducer, registerUserReducer, userReducer} from './Reducers';

export const reducers = combineReducers({
  userStatus: userReducer,
  registerUser: registerUserReducer,
  orders: ordersReducer,
});
