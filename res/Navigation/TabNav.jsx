import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome6';
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
    // <NavigationContainer>
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
            <Icons name="house" color={color} size={25} resizeMode="contain" />
          ),
        })}
      />
      <Tab.Screen
        name="My Orders"
        component={MyOrders}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="file-lines" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="truck-fast" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="ellipsis" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNav;
