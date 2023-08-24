import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Pressable,
  ScrollView,
  Stack,
  Text,
} from 'native-base';
import colors from '../Assets/colors';
import Icons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

const SignUp = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  return (
    <Box h="100%" w="100%" bgColor={colors.white}>
      <ScrollView>
        <Box mx={10}>
          <HStack>
            <Image
              source={require('../Assets/Logo.png')}
              alt="img"
              size="lg"
              w="20%"
              resizeMode="contain"
            />
            <Heading alignSelf="center" marginTop={3} mx={3}>
              Supreme
            </Heading>
          </HStack>
          <Pressable onPress={handleBack}>
            <HStack>
              <Icons name="arrow-back" color={colors.primary} size={22} />
              <Text mx={1} color={colors.primary}>
                Back
              </Text>
            </HStack>
          </Pressable>
          <Box marginBottom={2}>
            <Heading size="2xl">Welcome</Heading>
            <Text fontSize="lg" fontWeight="bold">
              Let's get the key details for your booking
            </Text>
          </Box>
          <FormControl>
            <Stack>
              <FormControl.Label _text={{fontSize: 'xl', fontWeight: 'light'}}>
                First Name
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                First Name is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Surname
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Surname is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Mobile Phone
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Mobile phone is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Email
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Email is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Create Password
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="password"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Password is required
              </FormControl.ErrorMessage>
              <HStack>
                <Text fontSize="md" my={4}>
                  Already have an account?
                </Text>
                <Link
                  alignSelf="center"
                  mx={2}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  _text={{
                    fontSize: 'md',
                    color: colors.primary,
                  }}>
                  Login
                </Link>
              </HStack>
              <Checkbox colorScheme="green" borderColor={colors.primary} my={3}>
                I accept Supreme's
                <Link
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  // w="40%"
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
            onPress={() => {
              navigation.navigate('Tab');
            }}
            endIcon={
              <Icons name="arrow-forward" color={colors.white} size={25} />
            }
            _text={{fontSize: '2xl'}}
            shadow={5}
            backgroundColor={colors.darkgrey}
            borderRadius={7}
            my={8}>
            Continue
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SignUp;
