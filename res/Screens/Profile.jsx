import {Box, HStack, Heading, Image, Link, Text} from 'native-base';
import React from 'react';
import {Pressable} from 'react-native';
import Icons from '../Assets/icons';
import colors from '../Assets/colors';
import ProfileCard from '../Components/ProfileCard';
import {NavigationContainer} from '@react-navigation/native';

const Profile = ({navigation}) => {
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
          Welcome Numan,
        </Heading>
        <Link _text={{color: colors.white, fontSize: 'xl'}}>Logout</Link>
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
