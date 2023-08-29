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
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    uri: `https://dashboard.supreme-cleaners.com/graphql`,
    cache: new InMemoryCache(),
  });



  const url = process.env["REACT_APP_ADMIN_BASE_URL"]
  console.log("url in app",url);
  
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
    <NativeBaseProvider>
      <StatusBar backgroundColor="#32cd32" />
      <Nav />
      </NativeBaseProvider>
      </Provider>
      </ApolloProvider>
  );
}

export default App;
