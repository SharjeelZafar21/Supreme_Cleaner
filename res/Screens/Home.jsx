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
import React from 'react';
import colors from '../Assets/colors';
import Icons from '../Assets/icons';
import WelcomeCard from '../Components/WelcomeCard';
// import {Text} from 'react-native-svg';
import {PieChart} from 'react-native-svg-charts';
import {ImageBackground} from 'react-native';

const Home = ({navigation}) => {
  return (
    <Box backgroundColor={colors.white} h="100%" w="100%">
      <Box m={5}>
        <Heading fontSize="4xl">Welcome Numan,</Heading>
        <Text fontSize="lg" color={colors.darkgrey}>
          What can we do for you today?
        </Text>
      </Box>
      <ScrollView>
        <Box h="35%" w="95%" justifyContent="center" alignSelf="center" my={5}>
          <Image
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
              // onPress={() => {
              //   navigation.navigate('Tab');
              // }}
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
        <WelcomeCard
          textColor={colors.black}
          bgColor={colors.white}
          title="Your Orders"
          onPress={() => {
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
      </ScrollView>
    </Box>
  );
};

export default Home;
