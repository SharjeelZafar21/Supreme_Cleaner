import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Link,
  ScrollView,
  Text,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import colors from '../Assets/colors';
import Icons from '../Assets/icons';
import WelcomeCard from '../Components/WelcomeCard';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction, ordersAction} from '../Redux/Actions';
import AsyncStorage from '@react-native-community/async-storage';

const Home = ({navigation}) => {
  // const dispatch = useDispatch();
  // const userData = useSelector(state => state.userStatus.user);
  // const [foundUser, setFoundUser] = useState();

  // const getEmailFromStorage = async () => {
  //   const username = await AsyncStorage.getItem('username');
  //   console.log('username', username);
  //   setFoundUser(username);
  // };
  // useEffect(() => {
  //   dispatch(LoginAction());
  //   getEmailFromStorage();
  // }, []);
  return (
    <Box backgroundColor={colors.white} h="100%" w="100%">
      <ScrollView h="100%">
        <Box m={5}>
          <Heading fontSize="4xl">Welcome</Heading>
          <Text fontSize="lg" color={colors.darkgrey}>
            What can we do for you today?
          </Text>
        </Box>
        <Box h="25%" w="95%" justifyContent="center" alignSelf="center" my={5}>
          <Image
            alt="img"
            borderRadius={20}
            source={require('../Assets/home.png')}
            h="100%"
            w="100%"
            resizeMode="stretch"
            position="absolute"
          />
          <Box position="relative">
            <Box
              w="55%"
              h="60%"
              alignSelf="flex-end"
              justifyContent="center"
              mx={8}>
              <Heading color={colors.darkgrey} fontSize="2xl">
                DRESS TO ALTER?
              </Heading>
              <Text color={colors.darkgrey} fontSize="md">
                Book your fitting appointment online
              </Text>
            </Box>
            <Button
              onPress={() => {
                navigation.navigate('Bookings');
              }}
              endIcon={
                <Icons name="arrow-forward" color={colors.white} size={20} />
              }
              w="35%"
              h="40px"
              _text={{fontSize: 'md'}}
              backgroundColor={colors.darkgrey}
              borderRightRadius={0}
              borderLeftRadius={10}
              my={2}
              alignSelf="flex-end">
              Book Now
            </Button>
          </Box>
        </Box>
        <Box h="65%">
          <WelcomeCard
            textColor={colors.black}
            bgColor={colors.white}
            title="Your Orders"
            onPress={() => {
              // dispatch(ordersAction());
              navigation.navigate('My Orders');
            }}
            icon1Name="file-document-multiple-outline"
            icon2Name="arrow-right"
          />
          <WelcomeCard
            textColor={colors.black}
            bgColor={colors.white}
            title="Recurring Booking"
            onPress={() => {
              navigation.navigate('Bookings');
            }}
            icon1Name="truck-fast-outline"
            icon2Name="arrow-right"
          />
          <WelcomeCard
            textColor={colors.white}
            bgColor={colors.darkgrey}
            title="Schedule a Booking"
            onPress={() => {
              navigation.navigate('Bookings');
            }}
            icon1Name="truck-cargo-container"
            icon2Name="arrow-right"
          />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Home;
