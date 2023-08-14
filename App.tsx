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

function App() {
  


  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#32cd32" />
      <Nav />
      </NativeBaseProvider>
  );
}

export default App;
