import {View, Text} from 'react-native';
import React from 'react';
import {Box, Heading} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import TopNav from '../Navigation/TopNav';

const MyOrders = () => {
  return (
    <>
      <Box>
        <Heading m={8}>Your Orders</Heading>
      </Box>
      {/* <NavigationContainer> */}
      <TopNav />
      {/* </NavigationContainer> */}
    </>
  );
};

export default MyOrders;
