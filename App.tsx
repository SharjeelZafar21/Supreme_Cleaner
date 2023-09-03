/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import { StatusBar } from 'react-native'

import { NativeBaseProvider, StatusBar } from 'native-base';
import React, {useEffect} from 'react';
import Nav from './res/Navigation/Nav';
import { Provider, useSelector } from 'react-redux';
import store from './res/Redux/Store';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './res/Screens/Welcome';
import Login from './res/Screens/Login';
import SignUp from './res/Screens/SignUp';

const AppWrapper = () => {
  return (
   <Provider store={store}>
    <App />
   </Provider>
  )
}

function App() {
  const client = new ApolloClient({
    uri: `https://dashboard.supreme-cleaners.com/graphql`,
    cache: new InMemoryCache(),
  });

  const token = useSelector(state => state.token.token);
  console.log('token in app.tsx',token);
  
  useEffect(() => {
    // This code will run whenever 'count' changes
    console.log('Token changed:', token);
  }, [token]);
  const Stack = createNativeStackNavigator();
  
  return (
    <ApolloProvider client={client}>
    <NativeBaseProvider>
      <StatusBar backgroundColor="#32cd32" />
      {token ? <Nav /> :
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welocme"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        </Stack.Navigator>
        </NavigationContainer>
      }
      
      </NativeBaseProvider>
      
      </ApolloProvider>
  );
}

export default AppWrapper;
