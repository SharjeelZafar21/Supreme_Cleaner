import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import MyOrders from '../Screens/MyOrders';
import Bookings from '../Screens/Bookings';
import Profile from '../Screens/Profile';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import colors from '../Assets/colors';
import CustomHeader from '../Components/CustomHeader';

const TabNav = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: colors.white}}
      activeColor={colors.primary}
      backBehavior="history">
      <Tab.Screen
        name="Home"
        component={Home}
        options={({route}) => ({
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Icons name="home-outline" color={color} size={25} />
          ),
        })}
      />
      <Tab.Screen
        name="My Orders"
        component={MyOrders}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="document-text-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="truck-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'More',
          tabBarIcon: ({color}) => (
            <Icons name="ellipsis-horizontal-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
