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
        Alert.alert('Signed Up Successfully');
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
