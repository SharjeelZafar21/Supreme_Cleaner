import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Link,
  NativeBaseProvider,
  StatusBar,
  Text,
} from 'native-base';
import React from 'react';
import Home from '../Screens/Home';
import DryClean from '../Screens/DryClean';
import Loundary_Wash from '../Screens/Loundary_Wash';
import Home_Bedding from '../Screens/Home_Bedding';
import ShirtService from '../Screens/ShirtService';
import colors from '../Assets/colors';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Logo from '../Components/Logo';
import Icons from '../Assets/icons';

const Nav = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welocme"
          component={Welcome}
          options={{
            headerTitle: () => (
              <HStack alignItems="center">
                <HStack alignItems="center">
                  <Logo />
                  <Heading mx={3} marginTop={3}>
                    Supreme
                  </Heading>
                </HStack>
                <HStack alignItems="center">
                  <Icon as={Icons} name="logo-usd" size="xl" />
                  <Link>Prices</Link>
                </HStack>
              </HStack>
            ),
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => (
              <HStack alignItems="center">
                <HStack alignItems="center">
                  <Logo />
                  <Heading mx={3} marginTop={3}>
                    Supreme
                  </Heading>
                </HStack>
                <HStack mx={10} alignSelf="center" my={3}>
                  <Icon as={Icons} name="logo-usd" size="xl" />
                  <Link>Prices</Link>
                </HStack>
              </HStack>
            ),
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitle: () => (
              <HStack alignItems="center">
                <HStack alignItems="center">
                  <Logo />
                  <Heading mx={3} marginTop={3}>
                    Supreme
                  </Heading>
                </HStack>
                <HStack alignItems="center">
                  <Icon as={Icons} name="logo-usd" size="xl" />
                  <Link>Prices</Link>
                </HStack>
              </HStack>
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DryClean"
          component={DryClean}
          options={{
            title: 'Dry Clean',
            headerStyle: {backgroundColor: colors.primary},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Loundary"
          component={Loundary_Wash}
          options={{
            title: 'Loundary Wash & Fold',
            headerStyle: {backgroundColor: colors.primary},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Bedding"
          component={Home_Bedding}
          options={{
            title: 'Home & Bedding',
            headerStyle: {backgroundColor: colors.primary},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="ShirtService"
          component={ShirtService}
          options={{
            title: 'Shirt Service',
            headerStyle: {backgroundColor: colors.primary},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
