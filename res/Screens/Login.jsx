import React from 'react';
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
  ScrollView,
  Stack,
  Text,
} from 'native-base';
import colors from '../Assets/colors';
import Icons from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
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
          <HStack>
            <Icons name="arrow-back" color={colors.primary} size={22} />
            <Text mx={1} color={colors.primary}>
              Back
            </Text>
          </HStack>
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
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Email is required
              </FormControl.ErrorMessage>
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
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Password is required
              </FormControl.ErrorMessage>
              <Link
                _text={{fontSize: 'md', color: colors.primary}}
                marginTop={8}>
                I forgot my password
              </Link>
            </Stack>
          </FormControl>
          <Button
            onPress={() => {
              navigation.navigate('Tab');
            }}
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
