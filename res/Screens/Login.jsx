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
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {useMutation} from '@apollo/client';
import {gql} from 'graphql-tag';
import {actionTypes} from '../Redux/Action-type';

const Login = ({navigation}) => {
  const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(input: {identifier: $email, password: $password}) {
        jwt
        user {
          id
          email
        }
      }
    }
  `;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const dispatch = useDispatch();

  const [login, {loading, error}] = useMutation(LOGIN_MUTATION);
  console.log('error in Login', error);

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
    } else {
      setPasswordError('');
    }
  };
  const handleSignIn = async () => {
    validateEmail();
    validatePassword();
    console.log(emailError);
    console.log(passwordError);

    if (!emailError && !passwordError) {
      try {
        const {data} = await login({variables: {email, password}});
        await AsyncStorage.setItem('userId', data.login.user.id);
        await AsyncStorage.setItem('userEmail', data.login.user.email);
        await AsyncStorage.setItem('jwt', data.login.jwt);
        // await AsyncStorage.setItem('username', data.login.user.username);
        await dispatch({type: actionTypes.TOKEN, payload: data.login.jwt});
        console.log('login');
        console.log('login', data);
      } catch (error) {
        console.log(error);
      }
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
                keyboardType="email-address"
                focusOutlineColor={colors.darkgrey}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                // type="text"
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
                marginTop={10}
                _text={{fontSize: 'xl', fontWeight: 'light', color: 'black'}}>
                Password
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
              <Link
                _text={{fontSize: 'md', color: colors.primary}}
                marginTop={8}>
                I forgot my password
              </Link>
            </Stack>
          </FormControl>
          {loading && <Text>Loading...</Text>}
          {error && <Text>{error}</Text>}
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
