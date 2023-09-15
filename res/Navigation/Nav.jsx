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
import PaymentInfo from '../Screens/PaymentInfo';
import PersonalInfo from '../Screens/PersonalInfo';
import Preferences from '../Screens/Preferences';
import Logo from '../Components/Logo';

const Nav = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen
          name="Tab"
          component={TabNav}
          options={{
            headerTitle: '',
            // headerBackVisible: true,
            headerLeft: () => <Logo />,
            headerRight: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="Price"
          component={Price}
          options={{
            headerTitle: '',
            headerBackVisible: true,
            headerLeft: () => <Logo />,
            headerRight: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="DryClean"
          component={DryClean}
          options={{
            headerTitle: '',
            headerBackVisible: true,
            headerLeft: () => <Logo />,
            headerRight: () => <CustomHeader />,
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
        <Stack.Screen
          name="PaymentInfo"
          component={PaymentInfo}
          options={{
            title: 'Payment Info',
            // headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{
            title: 'Personal Info',
            // headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="Preferences"
          component={Preferences}
          options={{
            title: 'Preferences',
            // headerTitle: () => <CustomHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
