import {Box, HStack, Heading, Image, Link, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import Icons from '../Assets/icons';
import colors from '../Assets/colors';
import ProfileCard from '../Components/ProfileCard';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction} from '../Redux/Actions';
import AsyncStorage from '@react-native-community/async-storage';
import {actionTypes} from '../Redux/Action-type';

const Profile = ({navigation}) => {
  const userData = useSelector(state => state.userStatus.user);
  const [foundUser, setFoundUser] = useState([]);
  const dispatch = useDispatch();

  const getEmailFromStorage = async () => {
    const email = await AsyncStorage.getItem('userEmail');
    console.log('async email', email);
    const findUser = await userData.filter(user => user.email == email);
    console.log('found user i home', findUser);
    setFoundUser(findUser);
  };
  useEffect(() => {
    dispatch(LoginAction());
    getEmailFromStorage();
  }, [foundUser, userData]);
  const logOut = async () => {
    await AsyncStorage.removeItem('userEmail');
    await dispatch({type: actionTypes.TOKEN, payload: null});
  };
  return (
    <Box h="100%" w="100%" bgColor={colors.white}>
      <Box h="30%" bgColor={colors.darkgrey} p={3} justifyContent="center">
        {/* <Image
          source={require('../Assets/Logo.png')}
          alt="img"
          size="lg"
          w="20%"
          resizeMode="contain"
          m={2}
        /> */}
        <Heading size="xl" color={colors.white}>
          Welcome {foundUser[0]?.username},
        </Heading>
        <Link _text={{color: colors.white, fontSize: 'xl'}} onPress={logOut}>
          Logout
        </Link>
      </Box>
      <Box h="70%" alignItems="center">
        <ProfileCard title="Recurring Booking" iconName="sync-outline" />
        <ProfileCard
          title="Personal Information"
          iconName="person-circle-outline"
        />
        <ProfileCard title="Payment Information" iconName="card-outline" />
        <ProfileCard title="Pereferences" iconName="options-outline" />
        <ProfileCard
          onPress={() => {
            navigation.navigate('HelpFeedback');
          }}
          title="Help & Feedback"
          iconName="help-buoy-outline"
        />
      </Box>
    </Box>
  );
};

export default Profile;
