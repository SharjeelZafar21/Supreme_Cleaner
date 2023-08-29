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

const PostOrder = () => {
  const [Name, setName] = useState();
  const [note, setLastName] = useState();
  const [mobilePhone, setMobilePhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [adress, setAdress] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostCode] = useState();

  const [NameError, setNameError] = useState();
  const [noteError, setNote] = useState();
  const [mobilePhoneError, setMobilePhoneError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [adressError, setAdressError] = useState();
  const [cityError, setCityError] = useState();
  const [postcodeError, setPostCodeError] = useState();

  const validateName = () => {
    if (!Name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateNote = () => {
    if (!note) {
      setNote('Note is required');
    } else {
      setNote('');
    }
  };

  const validateMobilePhone = () => {
    if (!mobilePhone) {
      setMobilePhoneError('Mobile Phone is required');
    } else {
      setMobilePhoneError('');
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
    } else {
      setPasswordError('');
    }
  };
  const validateAdress = () => {
    if (!adress) {
      setAdressError('Adress is required');
    } else {
      setAdressError('');
    }
  };
  const validateCity = () => {
    if (!city) {
      setCityError('City is required');
    } else {
      setCityError('');
    }
  };
  const validatePostCode = () => {
    if (!postcode) {
      setPostCodeError('Post Code is required');
    } else {
      setPostCodeError('');
    }
  };

  const validateForm = () => {
    validateName();
    validateNote();
    validateMobilePhone();
    validateEmail();
    validatePassword();
    validateAdress();
    validateCity();
    validatePostCode();
  };

  const handleSignUp = async () => {
    validateForm();

    // If all fields are valid, proceed with sign-up logic
    if (
      !NameError &&
      !noteError &&
      !mobilePhoneError &&
      !emailError &&
      !passwordError &&
      !adress &&
      !city &&
      !postcode
    ) {
      navigation.navigate('My Orders');
    }
  };
  return (
    <Box h="100%" w="100%" bgColor={colors.white}>
      <ScrollView>
        <Heading textAlign="center" my={5}>
          Place an Order
        </Heading>
        <Box mx={10}>
          <FormControl>
            <Stack>
              <FormControl.Label _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Name
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
                value={Name}
                onChangeText={text => setName(text)}
                onBlur={validateName}
              />
              {NameError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {NameError}
                </FormControl.HelperText>
              ) : null}
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
                Mobile Phone
              </FormControl.Label>
              <Input
                keyboardType="number-pad"
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
                value={mobilePhone}
                onChangeText={text => setMobilePhone(text)}
                onBlur={validateMobilePhone}
              />
              {mobilePhoneError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {mobilePhoneError}
                </FormControl.HelperText>
              ) : null}
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Cell Phone Number
              </FormControl.Label>
              <Input
                keyboardType="number-pad"
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
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
                Adress
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
                value={adress}
                onChangeText={text => setAdress(text)}
                onBlur={validateAdress}
              />
              {adressError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {adressError}
                </FormControl.HelperText>
              ) : null}
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                City
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
                value={city}
                onChangeText={text => setCity(text)}
                onBlur={validateCity}
              />
              {cityError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {cityError}
                </FormControl.HelperText>
              ) : null}
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Post Code
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.white}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
                value={postcode}
                onChangeText={text => setPostCode(text)}
                onBlur={validatePostCode}
              />
              {postcodeError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {postcodeError}
                </FormControl.HelperText>
              ) : null}
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Order Note
              </FormControl.Label>
              <Input
                h={20}
                borderRadius={10}
                focusOutlineColor={colors.white}
                _focus={{bgColor: colors.white}}
                // backgroundColor={colors.body}
                type="text"
                fontSize="lg"
              />
              {noteError ? (
                <FormControl.HelperText
                  alignSelf="flex-end"
                  _text={{color: colors.red}}>
                  {noteError}
                </FormControl.HelperText>
              ) : null}
            </Stack>
          </FormControl>
          <Button
            onPress={handleSignUp}
            endIcon={
              <Icons name="arrow-forward" color={colors.white} size={25} />
            }
            _text={{fontSize: '2xl'}}
            shadow={5}
            backgroundColor={colors.primary}
            borderRadius={7}
            my={8}>
            Place Order
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default PostOrder;
