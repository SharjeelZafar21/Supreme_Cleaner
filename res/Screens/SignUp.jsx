import React, {useState} from 'react';
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
import {SignUpAction} from '../Redux/Actions';
import {useDispatch} from 'react-redux';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setLoading] = useState(false);

  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [confirmpasswordError, setConfirmPasswordError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const dispatch = useDispatch();

  const validateFirstName = () => {
    if (!firstName) {
      setFirstNameError('Name is required');
    } else {
      setFirstNameError('');
    }
  };

  const validateLastName = () => {
    if (!lastName) {
      setLastNameError('Username is required');
    } else {
      setLastNameError('');
    }
  };

  const validateConfirmPassword = () => {
    if (password !== confirmpassword) {
      setConfirmPasswordError('Password not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const validateForm = () => {
    validateFirstName();
    validateLastName();
    validateConfirmPassword();
    validateEmail();
    validatePassword();
  };

  const data = JSON.stringify({
    email: email,
    password: password,
    username: lastName,
    // role: 'user',
  });

  const handleSignUp = async () => {
    validateForm();

    // If all fields are valid, proceed with sign-up logic
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !passwordError &&
      !confirmpasswordError
    ) {
      // Perform sign-up logic
      setLoading(true);
      await dispatch(SignUpAction(data));
      navigation.navigate('Login');
      setLoading(false);
    }
  };
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
                Name
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.darkgrey}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
                value={firstName}
                onChangeText={text => setFirstName(text)}
                onBlur={validateFirstName}
              />
              {firstNameError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {firstNameError}
                </FormControl.HelperText>
              ) : null}
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                username
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.darkgrey}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
                value={lastName}
                onChangeText={text => setLastName(text)}
                onBlur={validateLastName}
              />
              {lastNameError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {lastNameError}
                </FormControl.HelperText>
              ) : null}
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Email
              </FormControl.Label>
              <Input
                keyboardType="email-address"
                focusOutlineColor={colors.darkgrey}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
                value={email}
                onChangeText={text => setEmail(text)}
                onBlur={validateEmail}
              />
              {emailError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {emailError}
                </FormControl.HelperText>
              ) : null}
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Create Password
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.darkgrey}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="password"
                fontSize="lg"
                value={password}
                onChangeText={text => setPassword(text)}
                onBlur={validatePassword}
              />
              {passwordError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {passwordError}
                </FormControl.HelperText>
              ) : null}
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Confirm Password
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.darkgrey}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="password"
                fontSize="lg"
                value={confirmpassword}
                onChangeText={text => setConfirmPassword(text)}
                onBlur={validateConfirmPassword}
              />
              {confirmpasswordError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {confirmpasswordError}
                </FormControl.HelperText>
              ) : null}
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
            isLoading={isLoading}
            isLoadingText="Submitting"
            onPress={handleSignUp}
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
