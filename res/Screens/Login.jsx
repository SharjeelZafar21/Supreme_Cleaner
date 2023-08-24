import React, {useState} from 'react';
import {
  Box,
  Button,
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
import {useSelector, useDispatch} from 'react-redux';
import {LoginAction} from '../Redux/Actions';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const userData = useSelector(state => state.userStatus.user);
  console.log('user data ', userData);
  const dispatch = useDispatch();
  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
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

  const data = JSON.stringify({email: email, password: password});

  const handleSignIn = async () => {
    validateEmail();
    validatePassword();
    console.log(emailError);
    console.log(passwordError);

    if (!emailError && !passwordError) {
      await dispatch(LoginAction(data));
      navigation.navigate('Tab');
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
          <Box marginBottom={8}>
            <Heading size="2xl">Welcome</Heading>
            <Text fontSize="lg" fontWeight="bold">
              sign in to continue
            </Text>
          </Box>
          <FormControl>
            <Stack my={4}>
              <FormControl.Label
                _text={{fontSize: 'xl', fontWeight: 'light', color: 'black'}}>
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
                marginTop={20}
                _text={{fontSize: 'xl', fontWeight: 'light', color: 'black'}}>
                Password
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
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
              <Link
                _text={{fontSize: 'md', color: colors.primary}}
                marginTop={8}>
                I forgot my password
              </Link>
            </Stack>
          </FormControl>
          <Button
            onPress={handleSignIn}
            endIcon={
              <Icons name="arrow-forward" color={colors.white} size={25} />
            }
            // w="40%"
            _text={{fontSize: '2xl'}}
            shadow={5}
            backgroundColor={colors.darkgrey}
            borderRadius={7}
            my={8}>
            Sign in
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Login;
