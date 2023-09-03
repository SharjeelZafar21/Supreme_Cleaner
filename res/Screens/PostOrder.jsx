import React, {useState, useEffect} from 'react';
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
import {Linking, TextInput} from 'react-native';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import AsyncStorage from '@react-native-community/async-storage';

const PostOrder = ({navigation}) => {
  const CREATE_ORDER = gql`
    mutation createOrder(
      $name: String!
      $email: String!
      $phone: String!
      $cellphone: String!
      $address: String!
      $items: String!
      $amount: Int!
      $city: String!
      $postcode: String!
      $note: String!
    ) {
      createOrder(
        data: {
          name: $name
          email: $email
          phone: $phone
          cellphone: $cellphone
          address: $address
          items: $items
          amount: $amount
          city: $city
          postcode: $postcode
          note: $note
        }
      ) {
        data {
          id
          attributes {
            name
            email
            phone
            cellphone
            address
            items
            amount
            city
            postcode
            note
          }
        }
      }
    }
  `;

  const [name, setName] = useState();
  const [note, setNote] = useState();
  const [phone, setMobilePhone] = useState();
  const [email, setEmail] = useState();
  const [cellPhone, setCellPhone] = useState();
  const [address, setAdress] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostCode] = useState();

  const [NameError, setNameError] = useState();
  const [noteError, setNoteError] = useState();
  const [mobilePhoneError, setMobilePhoneError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [adressError, setAdressError] = useState();
  const [cityError, setCityError] = useState();
  const [postcodeError, setPostCodeError] = useState();

  const [orderId, setOrderId] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [cartItems, setCartItems] = useState([]);

  console.log();

  const [createOrder] = useMutation(CREATE_ORDER, {
    onCompleted: async data => {
      await setOrderId(data?.createOrder?.data?.id);
      console.log('order id ', data.createOrder.data.id);
      const paymentGatewayURL = `https://sandbox.payfast.co.za/eng/process?merchant_id=10000100&merchant_key=46f0cd694581a&amount=${totalPrice}&item_name=${encodeURIComponent(
        itemString,
      )}&custom_str1=${orderId}`;

      // Open the payment gateway URL
      await Linking.openURL(paymentGatewayURL);

      console.log('Payment gateway URL opened successfully');
      navigation.navigate('My Orders');
    },
    onError: error => {
      console.error('Mutation error:', error);
    },
  });

  const validateName = () => {
    if (!name) {
      setNameError('name is required');
    } else {
      setNameError('');
    }
  };

  const validateNote = () => {
    if (!note) {
      setNoteError('Note is required');
    } else {
      setNoteError('');
    }
  };

  const validateMobilePhone = () => {
    if (!phone) {
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
    if (!cellPhone) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };
  const validateAdress = () => {
    if (!address) {
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
  // const itemString = itemStrings.join(', ');
  const handleSubmit = async event => {
    validateForm();
    // If all fields are valid, proceed with sign-up logic
    if (
      !NameError &&
      !noteError &&
      !mobilePhoneError &&
      !emailError &&
      !passwordError &&
      !adressError &&
      !cityError &&
      !postcodeError &&
      !noteError
    ) {
      console.log('before try');
      try {
        console.log('enter in try');
        await createOrder({
          variables: {
            name: name,
            email: email,
            phone: phone,
            cellphone: cellPhone,
            address: address,
            items: itemString,
            amount: +totalPrice,
            city: city,
            postcode: postcode,
            note: note,
          },
        });
        // Get the orderId from the result data
        // const orderId = result.data?.createOrder?.data?.id;

        // Construct the payment gateway URL with query parameters

        // await Linking.openURL('https://sandbox.payfast.co.za/eng/process');
        // event.target.action = 'https://sandbox.payfast.co.za/eng/process';
        // event.target.submit();
        console.log('complete');

        // Handle form submission logic here
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    // Load saved quantities from AsyncStorage when the component mounts
    loadCart();
  }, []);

  const loadCart = async () => {
    const cartData = await AsyncStorage.getItem('cart');
    const totalPrice = await AsyncStorage.getItem('amount');
    const userEmail = await AsyncStorage.getItem('userEmail');
    const parsedCartData = JSON.parse(cartData);
    setCartItems(parsedCartData);
    setTotalPrice(totalPrice);
    setEmail(userEmail);
    console.log('cart in storage', cartData);
    console.log('amount', totalPrice);
    console.log('userEmail', userEmail);
  };

  const itemStrings = cartItems.map(item => {
    return `${item.quantity} x ${item.item}`;
  });

  const itemString = itemStrings.join(', ');

  console.log('item strings', itemStrings);
  console.log('item string', itemString);

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
                value={name}
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
              {/* <FormControl.Label
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
              ) : null} */}
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
                value={phone}
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
                value={cellPhone}
                onChangeText={text => setCellPhone(text)}
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
                value={address}
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
                value={note}
                onChangeText={text => setNote(text)}
                onBlur={validateNote}
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
            onPress={handleSubmit}
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
