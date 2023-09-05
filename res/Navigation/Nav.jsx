import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DryClean from '../Screens/DryClean';
import CustomHeader from '../Components/CustomHeader';
import TabNav from './TabNav';
import Price from '../Screens/Price';
import HelpFeedback from '../Screens/HelpFeedback';
import Cart from '../Screens/Cart';
import PostOrder from '../Screens/PostOrder';

const Nav = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen
          name="Tab"
          component={TabNav}
          options={{
            headerBackVisible: false,
            headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="Price"
          component={Price}
          options={{
            headerBackVisible: false,
            headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="DryClean"
          component={DryClean}
          options={{
            headerBackVisible: false,
            headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="HelpFeedback"
          component={HelpFeedback}
          options={{
            title: 'Help & Feedback',
            // headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Add to Cart',
            // headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="Post Order"
          component={PostOrder}
          options={{
            title: 'Order Post',
            // headerTitle: () => <CustomHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
