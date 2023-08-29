import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
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
        <Stack.Screen
          name="Tab"
          component={TabNav}
          options={{
            headerBackVisible: false,
            headerTitle: () => <CustomHeader />,
          }}
          // options={({route}) => ({
          //   // headerTitle: getHeaderTitle(route),
          //   headerTitleAlign: 'center',
          //   // headerTintColor: colors.white,
          //   headerShadowVisible: false,
          //   headerStyle: {
          //     backgroundColor: colors.primary,
          //     fontFamily: 'Poppins-Regular',
          //   },
          // })}
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
          name="Loundary"
          component={Loundary_Wash}
          options={{
            headerBackVisible: false,
            headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="Bedding"
          component={Home_Bedding}
          options={{
            headerBackVisible: false,
            headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="ShirtService"
          component={ShirtService}
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
