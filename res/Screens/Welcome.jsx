import React from 'react';
import {Box, Button, Heading, Image, Text} from 'native-base';
import colors from '../Assets/colors';

const Welcome = ({navigation}) => {
  return (
    <Box h="100%" w="100%" backgroundColor="white">
      <Box h="50%" w="100%">
        <Image
          source={require('../Assets/welcome.jpg')}
          alt="img"
          h="100%"
          resizeMode="contain"
        />
      </Box>
      <Box m={5}>
        <Heading size="xl" fontWeight="extrabold">
          Welcome!
        </Heading>
        <Text fontSize="lg">
          If you already have an account, please sign in. Don't have an account
          yet? We need to check if you are in our delivery area, so please check
          your postcode by hitting « Check postcode » below.
        </Text>
        <Button
          backgroundColor={colors.gray}
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
