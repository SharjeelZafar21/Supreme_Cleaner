import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../Assets/colors';
import CurrentOrders from '../Screens/CurrentOrders';
import PastOrders from '../Screens/PastOrders';

const TopNav = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
        tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
        tabBarStyle: {
          backgroundColor: colors.body,
        },
      }}>
      <Tab.Screen name="Current Orders" component={CurrentOrders} />
      <Tab.Screen name="Past Orders" component={PastOrders} />
    </Tab.Navigator>
  );
};

export default TopNav;
