import {actionTypes} from '../Action-type';
const initialstate = {
  user: null,
};

export const userReducer = (state = initialstate, {type, payload}) => {
  console.log('reducer', payload);
  switch (type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: payload,
      };
    // case actionTypes.LOGOUT:
    //   return {
    //     user: null,
    //   };
    case actionTypes.LOGINERR:
      return {
        user: {...state},
      };
    default:
      return {...state};
  }
};

const initialsstate = {
  users: null,
};

export const registerUserReducer = (state = initialsstate, {type, payload}) => {
  console.log(payload);
  switch (type) {
    case actionTypes.SIGNUP:
      return {...state, users: payload};
    case actionTypes.LOGOUT:
      return {
        user: null,
      };
    case actionTypes.SIGNUPERR:
      return {users: {...state}};
    default:
      return {...state};
  }
};

const postjobinitialstate = {
  postjob: null,
};

const ordersinitialstate = {
  orders: null,
};
export const ordersReducer = (state = ordersinitialstate, {type, payload}) => {
  switch (type) {
    case actionTypes.ORDER:
      return {
        ...state,
        orders: payload,
      };
    case actionTypes.ORDERERR:
      return {
        ...state,
      };
    default:
      return {...state};
  }
};

const servicesinitialstate = {
  services: null,
};
export const servicesReducer = (
  state = servicesinitialstate,
  {type, payload},
) => {
  switch (type) {
    case actionTypes.SERVICES:
      return {
        ...state,
        services: payload,
      };
    case actionTypes.SERVICESERR:
      return {
        ...state,
      };
    default:
      return {...state};
  }
};

const paymentinitialstate = {
  payment: null,
};
export const PaymentReducer = (
  state = paymentinitialstate,
  {type, payload},
) => {
  switch (type) {
    case actionTypes.PAYMENT:
      return {
        ...state,
        payment: payload,
      };
    case actionTypes.PAYMENTERR:
      return {
        ...state,
      };
    default:
      return {...state};
  }
};
const createorderinitialstate = {
  order: null,
};
export const CreateOrderReducer = (
  state = createorderinitialstate,
  {type, payload},
) => {
  switch (type) {
    case actionTypes.CREATEORDER:
      return {
        ...state,
        order: payload,
      };
    case actionTypes.CREATEORDERERR:
      return {
        ...state,
      };
    default:
      return {...state};
  }
};
