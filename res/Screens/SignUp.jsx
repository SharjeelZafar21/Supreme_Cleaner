import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  Icon,
  Input,
  Link,
  ScrollView,
  Stack,
  Text,
} from 'native-base';
import colors from '../Assets/colors';
import Icons from 'react-native-vector-icons/FontAwesome6';
import {NavigationContainer} from '@react-navigation/native';

const SignUp = ({navigation}) => {
  return (
    <Box h="100%" w="100%">
      <Box m={5}>
        <Heading size="xl">Welcome</Heading>
        <Text fontSize="lg">Let's get the key details for your booking</Text>
      </Box>
      <ScrollView>
        <Box
          backgroundColor="white"
          // h="330px"
          w="90%"
          my={3}
          alignSelf="center"
          borderRadius="md"
          shadow={3}>
          <FormControl>
            <Stack my={4} w="80%" alignSelf="center">
              <FormControl.Label
                _text={{fontSize: 'xl', fontWeight: 'light', color: 'black'}}>
                First Name
              </FormControl.Label>
              <Input
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                borderColor="black"
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                First Name is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                _text={{fontSize: 'xl', fontWeight: 'light', color: 'black'}}>
                Last Name
              </FormControl.Label>
              <Input
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                borderColor="black"
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Last Name is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                _text={{fontSize: 'xl', fontWeight: 'light', color: 'black'}}>
                Mobile Phone
              </FormControl.Label>
              <Input
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                borderColor="black"
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Mobile phone is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                _text={{fontSize: 'xl', fontWeight: 'light', color: 'black'}}>
                Email
              </FormControl.Label>
              <Input
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                borderColor="black"
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Email is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                my={4}
                _text={{fontSize: 'xl', fontWeight: 'light', color: 'black'}}>
                Create Password
              </FormControl.Label>
              <Input
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                borderColor="black"
                type="password"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Password is required
              </FormControl.ErrorMessage>
              <Text fontSize="md" my={2}>
                Already have an account?
                <Link
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  _text={{
                    fontSize: 'md',
                    color: colors.primary,
                  }}>
                  Login
                </Link>
              </Text>
              <Checkbox colorScheme="green" borderColor={colors.primary} my={3}>
                I accept Supreme's
                <Link
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  w="40%"
                  _text={{
                    fontSize: 'md',
                    color: colors.primary,
                  }}>
                  Terms and Conditions
                </Link>
              </Checkbox>
              <Checkbox colorScheme="green" borderColor={colors.primary} my={3}>
                I accept Supreme's
                <Link
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  w="40%"
                  _text={{
                    fontSize: 'md',
                    color: colors.primary,
                  }}>
                  Privacy Policy
                </Link>
              </Checkbox>
              <Checkbox colorScheme="green" borderColor={colors.primary} my={3}>
                Join our monthly newsletter to get eco lifestyle inspiration,
                cleaning tips and exclusive partner offers straight to your
                inbox!
              </Checkbox>
            </Stack>
          </FormControl>
          <Button
            endIcon={
              <Icon as={Icons} name="arrow-right" size="lg" color="white" />
            }
            w="50%"
            _text={{fontSize: '2xl'}}
            backgroundColor={colors.gray}
            borderRightRadius={0}
            borderLeftRadius={7}
            my={8}
            alignSelf="flex-end">
            Continue
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SignUp;
