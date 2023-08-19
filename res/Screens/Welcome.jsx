import React from 'react';
import {Box, Button, HStack, Heading, Image, Text} from 'native-base';
import colors from '../Assets/colors';

const Welcome = ({navigation}) => {
  return (
    <Box h="100%" w="100%" backgroundColor="white">
      <HStack h="45%" w="100%">
        <Image
          source={require('../Assets/Logo.png')}
          alt="img"
          size="lg"
          w="20%"
          resizeMode="contain"
          m={2}
        />
        <Image
          source={require('../Assets/welcome.jpg')}
          alt="img"
          h="100%"
          w="80%"
          resizeMode="contain"
        />
      </HStack>
      <Box w="70%" alignSelf="center" h="55%" my={10}>
        <Heading size="xl" fontWeight="extrabold">
          Welcome!
        </Heading>
        <Text fontSize="md">
          If you already have an account, please sign in. Don't have an account
          yet? We need to check if you are in our delivery area, so please check
          your postcode by hitting « Check postcode » below.
        </Text>
        <Button
          backgroundColor={colors.darkgrey}
          onPress={() => {
            navigation.navigate('Login');
          }}
          my={5}
          h="50px"
          size="lg"
          borderRadius="lg">
          Sign in
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          variant="outline"
          h="50px"
          size="lg"
          borderRadius="lg"
          colorScheme="gray"
          borderWidth="2">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
