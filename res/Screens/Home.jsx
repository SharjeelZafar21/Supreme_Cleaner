import {Box, HStack, Heading, Link, Text} from 'native-base';
import React from 'react';
import colors from '../Assets/colors';
import Icons from '../Assets/icons';
import WelcomeCard from '../Components/WelcomeCard';
// import {Text} from 'react-native-svg';
import {PieChart} from 'react-native-svg-charts';

const Home = ({navigation}) => {
  const data = [
    {
      key: 1,
      value: 50,
      svg: {fill: 'white'},
      arc: {outerRadius: '70%', cornerRadius: 0},
      // onPress: () => console.log('Pressed slice 1'),
    },
    {
      key: 2,
      value: 50,
      svg: {fill: 'green'},
      arc: {outerRadius: '70%', cornerRadius: 0},
      // onPress: () => console.log('Pressed slice 1'),
    },
  ];
  return (
    <Box backgroundColor={colors.white} h="100%" w="100%">
      <Box m={3}>
        <Heading fontSize="4xl">Welcome Numan,</Heading>
        <Text fontSize="lg" color={colors.darkgrey}>
          What can we do for you today?
        </Text>
      </Box>
      <HStack backgroundColor={colors.body} h="30%" alignItems="center">
        <Box w="40%">
          <PieChart style={{height: 150, width: 150}} data={data} animate>
            <Text
              textAlign="center"
              alignSelf="center"
              my="1/3"
              fontSize="3xl"
              color={colors.primary}>
              {data[0].value}%
            </Text>
          </PieChart>
        </Box>
        <Box w="60%">
          <Heading>Help us know your preferences!</Heading>
          <Link _text={{fontSize: 'lg', color: colors.primary}} marginTop={5}>
            Add my preferences
          </Link>
        </Box>
      </HStack>
      <WelcomeCard
        textColor={colors.black}
        bgColor={colors.white}
        title="Your Orders"
        onPress={() => {
          navigation.navigate('My Orders');
        }}
        icon1Name="copy1"
        icon2Name="arrow-right"
      />
      <WelcomeCard
        textColor={colors.black}
        bgColor={colors.white}
        title="Recurring Booking"
        onPress={() => {
          navigation.navigate('Bookings');
        }}
        icon1Name="truck"
        icon2Name="arrowright"
      />
      <WelcomeCard
        textColor={colors.white}
        bgColor={colors.gray}
        title="Schedule a Booking"
        onPress={() => {
          navigation.navigate('Bookings');
        }}
        icon1Name="truck"
        icon2Name="arrowright"
      />
    </Box>
  );
};

export default Home;
