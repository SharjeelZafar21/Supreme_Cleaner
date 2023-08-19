import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Icon,
  Input,
  Link,
  Stack,
  Text,
} from 'native-base';
import colors from '../Assets/colors';
import Icons from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  return (
    <Box h="100%" w="100%">
      <Box m={5}>
        <Heading size="xl">Welcome</Heading>
        <Text fontSize="lg">Sign in to continue</Text>
      </Box>
      <Box
        backgroundColor="white"
        // h="330px"
        w="90%"
        my={5}
        alignSelf="center"
        borderRadius="md"
        shadow={3}>
        <FormControl>
          <Stack my={4} w="80%" alignSelf="center">
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
              Password
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
            <Link _text={{fontSize: 'md', color: colors.primary}} my={4}>
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
          w="50%"
          _text={{fontSize: '2xl'}}
          backgroundColor={colors.gray}
          borderRightRadius={0}
          borderLeftRadius={7}
          my={8}
          alignSelf="flex-end">
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
