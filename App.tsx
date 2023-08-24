/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import { StatusBar } from 'react-native'

import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import Nav from './res/Navigation/Nav';
import { Provider } from 'react-redux';
import store from './res/Redux/Store';

function App() {
  


  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <StatusBar backgroundColor="#32cd32" />
      <Nav />
      </NativeBaseProvider>
      </Provider>
  );
}

export default App;
