import AsyncStorage from '@react-native-community/async-storage';
import {actionTypes} from './Action-type';
import {Alert} from 'react-native';
// import {Alert} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const apiBaseUrl = 'https://dashboard.supreme-cleaners.com/api';

export const LoginAction = data => {
  console.log('object arived', data);
  return async function (dispatch) {
    try {
      const response = await fetch(`${apiBaseUrl}/users`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Accept: '*/*',
        },
        // body: data,
      });
      const result = await response.json();
      console.log('result', result);
      console.log('status', response.status);
      if (response.status === 200) {
        // await AsyncStorage.setItem('userEmail', result.accessToken);
        dispatch({type: actionTypes.LOGIN, payload: result});
      } else {
        console.log('You are not authorized');
        Alert.alert('Your are not user please signup first');
        dispatch({type: actionTypes.LOGINERR});
      }
    } catch (err) {
      console.log('your User is not loged in', err);
      Alert.alert('Not loged in try again', err);
    }
  };
};

// export const LogOutAction = () => {
//   return async function (dispatch) {
//     try {
//       await AsyncStorage.removeItem('token');
//       const token = await AsyncStorage.getItem('token');
//       console.log('action logout', token);
//       // dispatch({type: actionTypes.LOGOUT, payload: token});
//       dispatch({type: actionTypes.LOGIN, payload: null});
//       dispatch({type: actionTypes.PROFILEDATA, payload: null});
//     } catch (error) {
//       console.log('Logout error', error);
//     }
//   };
// };

export const SignUpAction = data => {
  console.log('my userdata', data);
  return async function (dispatch) {
    try {
      const response = await fetch(`${apiBaseUrl}/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: '*/*',
        },
        body: data,
      });
      console.log('respose', response);
      const result = await response.json(data);
      console.log(response.status);
      console.log('result', result);
      if (response.status === 200) {
        dispatch({type: actionTypes.SIGNUP, payload: result});
        console.log('Signed Up Successfully');
      } else {
        console.log('You are not authorized');
        Alert.alert('You are not autharized', result.message);
        dispatch({type: actionTypes.SIGNUPERR});
      }
    } catch (err) {
      console.log('User is not SignedUp Properly', err);
      Alert.alert('User is not SignedUp Properly', err);
    }
  };
};

// export const postJobAction = data => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log('my data', data);
//     console.log(tokenData);
//     try {
//       const response = await fetch('http://localhost:5000/job', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           Accept: '*/*',
//           Authorization: `bearer ${tokenData}`,
//         },
//         body: data,
//       });
//       const result = await response.json(data);
//       //console.log(response)
//       console.log('result in action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.POSTJOB, payload: result});
//         // navigation.navigate('Home_Screen');
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.JOBERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };
// export const postProposalAction = data => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log('my data', data);
//     console.log(tokenData);
//     try {
//       const response = await fetch('http://localhost:5000/proposal', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           Accept: '*/*',
//           Authorization: `bearer ${tokenData}`,
//         },
//         body: data,
//       });
//       const result = await response.json(data);
//       //console.log(response)
//       console.log('result in action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.POSTPROPOSAL, payload: result});
//         // navigation.navigate('Home_Screen');
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.POSTPROPOSALERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ', err);
//     }
//   };
// };
export const ordersAction = () => {
  return async function (dispatch) {
    // const tokenData = await AsyncStorage.getItem('token');
    // console.log(tokenData);
    try {
      const response = await fetch(`${apiBaseUrl}/orders`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Accept: '*/*',
          // Authorization: `bearer ${tokenData}`,
        },
      });
      const result = await response.json();
      //console.log(response)
      console.log('result in order action', result);
      if (response.status < 400 && response.status >= 200) {
        dispatch({type: actionTypes.ORDER, payload: result});
        // navigation.navigate('Home_Screen');
      } else {
        console.log('You are not authorized');
        dispatch({type: actionTypes.ORDERERR});
      }
    } catch (err) {
      console.log('Data is not passed properly ');
    }
  };
};
// export const userJobProposalsAction = () => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log(tokenData);
//     try {
//       const id = require('../Screens/Buyer/ProposalList');
//       console.log('job id in proposal', id);
//       const response = await fetch(
//         `http://localhost:5000/proposal/proposals-by-id/${id.id}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-type': 'application/json',
//             Accept: '*/*',
//             Authorization: `bearer ${tokenData}`,
//           },
//         },
//       );
//       const result = await response.json();
//       //console.log(response)
//       console.log('result in action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.GETPROPOSAL, payload: result});
//         // navigation.navigate('Home_Screen');
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.GETPROPOSALERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };
// export const JobAction = () => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log(tokenData);
//     const filter = {title: '', pageNo: 0, pageSize: -1, category: ''};
//     try {
//       const response = await fetch(
//         `http://localhost:5000/job?filter=${JSON.stringify(filter)}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-type': 'application/json',
//             Accept: '*/*',
//             Authorization: `bearer ${tokenData}`,
//           },
//         },
//       );
//       const result = await response.json();
//       //console.log(response)
//       console.log('result in action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.GETALLJOBS, payload: result});
//         // navigation.navigate('Home_Screen');
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.ALLJOBERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };

// export const profileData = () => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log('profile data token', tokenData);
//     try {
//       console.log(tokenData);
//       const response = await fetch(`http://localhost:5000/auth/profile`, {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//           Accept: '*/*',
//           Authorization: `bearer ${tokenData}`,
//         },
//       });
//       const result = await response.json();
//       console.log('respose edhr h', result);
//       console.log(response.status);
//       if (response.status < 400 && response.status >= 200) {
//         //console.log(result)
//         dispatch({type: actionTypes.PROFILEDATA, payload: result});
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.PROFILEERR, payload: result.message});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ', err);
//     }
//   };
// };

// export const listGigs = () => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     const filter = {title: '', pageNo: 0, pageSize: -1, category: ''};
//     try {
//       const response = await fetch(
//         `http://localhost:5000/gig?filter=${JSON.stringify(filter)}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-type': 'application/json',
//             Accept: '*/*',
//             Authorization: `bearer ${tokenData}`,
//           },
//         },
//       );
//       const result = await response.json();
//       //console.log(response)
//       console.log('response', result);
//       if (response.status == 200) {
//         dispatch({type: actionTypes.GIGSLIST, payload: result});
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.GIGSERR});
//       }
//     } catch (err) {
//       console.log('Consinment is not load properly ', err);
//     }
//   };
// };
// export const postGigAction = data => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log('my data', data);
//     console.log(tokenData);
//     try {
//       const response = await fetch('http://localhost:5000/gig', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           Accept: '*/*',
//           Authorization: `bearer ${tokenData}`,
//         },
//         body: data,
//       });
//       const result = await response.json(data);
//       //console.log(response)
//       console.log('result in action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.POSTGIG, payload: result});
//         // navigation.navigate('Home_Screen');
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.GIGERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };
// export const sellerGigAction = () => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log(tokenData);
//     try {
//       const response = await fetch('http://localhost:5000/gig/seller-gigs', {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//           Accept: '*/*',
//           Authorization: `bearer ${tokenData}`,
//         },
//       });
//       const result = await response.json();
//       //console.log(response)
//       console.log('result in action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.SELLERGIG, payload: result});
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.SELLERGIGERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };

// export const cityList = () => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     try {
//       const response = await fetch('http://localhost:5000/job/cities', {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//           Accept: '*/*',
//           Authorization: `bearer ${tokenData}`,
//         },
//       });
//       const result = await response.json();
//       console.log('HS code in actions', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.CITIES, payload: result});
//       } else {
//         console.log('HS CODE NOT LOAD');
//         dispatch({type: actionTypes.CITIESERR});
//       }
//     } catch (err) {
//       console.log('Consinment is not load properly ');
//     }
//   };
// };

// export const PaymentAction = data => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log('my data', data);
//     console.log(tokenData);
//     try {
//       const response = await fetch('http://localhost:5000/payment', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           Accept: '*/*',
//           Authorization: `bearer ${tokenData}`,
//         },
//         body: data,
//       });
//       const result = await response.json();
//       //console.log(response)
//       console.log('result in payment action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.PAYMENT, payload: result});
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.PAYMENTERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };
// export const createOrderAction = data => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log('my data', data);
//     console.log(tokenData);
//     try {
//       const response = await fetch('http://localhost:5000/order', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           Accept: '*/*',
//           Authorization: `bearer ${tokenData}`,
//         },
//         body: data,
//       });
//       const result = await response.json();
//       //console.log(response)
//       console.log('result in order action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.CREATEORDER, payload: result});
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.CREATEORDERERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };
// export const buyerOrderAction = () => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log(tokenData);
//     try {
//       const response = await fetch(
//         `http://localhost:5000/order/all-buyer-orders`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-type': 'application/json',
//             Accept: '*/*',
//             Authorization: `bearer ${tokenData}`,
//           },
//         },
//       );
//       const result = await response.json();
//       //console.log(response)
//       console.log('result in buyer order action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.GETORDER, payload: result});
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.GETORDERERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };
// export const sellerOrderAction = () => {
//   return async function (dispatch) {
//     const tokenData = await AsyncStorage.getItem('token');
//     console.log(tokenData);
//     try {
//       const response = await fetch(
//         `http://localhost:5000/order/all-seller-orders`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-type': 'application/json',
//             Accept: '*/*',
//             Authorization: `bearer ${tokenData}`,
//           },
//         },
//       );
//       const result = await response.json();
//       //console.log(response)
//       console.log('result in seller order action', result);
//       if (response.status < 400 && response.status >= 200) {
//         dispatch({type: actionTypes.GETSORDER, payload: result});
//       } else {
//         console.log('You are not authorized');
//         dispatch({type: actionTypes.GETSORDERERR});
//       }
//     } catch (err) {
//       console.log('Data is not passed properly ');
//     }
//   };
// };
