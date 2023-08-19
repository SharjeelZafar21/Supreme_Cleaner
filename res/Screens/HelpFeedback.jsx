import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  ScrollView,
  Text,
} from 'native-base';
import React from 'react';
import colors from '../Assets/colors';
import Icons from '../Assets/icons';

const HelpFeedback = () => {
  return (
    <Box h="100%" w="100%" bgColor={colors.white} p={8}>
      <ScrollView>
        <Heading my={6} fontSize="2xl" w="80%">
          We are always happy to hear from you!
        </Heading>
        <HStack my={2}>
          <Icons name="help-circle-outline" color={colors.primary} size={30} />
          <Text fontSize="lg" alignSelf="center" mx={6}>
            FAQ
          </Text>
        </HStack>
        <HStack my={2}>
          <Icons
            name="information-circle-outline"
            color={colors.primary}
            size={30}
          />
          <Text fontSize="lg" alignSelf="center" mx={6}>
            Terms and Conditions
          </Text>
        </HStack>
        <HStack my={2}>
          <Icons name="star-outline" color={colors.primary} size={30} />
          <Link _text={{fontSize: 'lg'}} alignSelf="center" mx={6}>
            Rate us on Google
          </Link>
        </HStack>
        <HStack my={2}>
          <Icons name="call-outline" color={colors.primary} size={30} />
          <Text fontSize="lg" alignSelf="center" mx={6}>
            Call +44 (0)20 8004 2630
          </Text>
        </HStack>
        <Box bgColor={colors.body} borderRadius={6} my={4}>
          <Box p={5}>
            <Text fontSize="xl" color={colors.black}>
              Email us
            </Text>
            <Text>
              Not 100% happy about your experience? Any suggestions to help us
              improve?
            </Text>
            <FormControl>
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Name
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.body}
                borderTopWidth={0}
                borderRightWidth={0}
                borderLeftWidth={0}
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Name is required
              </FormControl.ErrorMessage>
              <FormControl.Label
                marginTop={5}
                _text={{fontSize: 'xl', fontWeight: 'light'}}>
                Email
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.body}
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
                Phone number
              </FormControl.Label>
              <Input
                focusOutlineColor={colors.white}
                backgroundColor={colors.body}
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
                YOUR MESSAGE
              </FormControl.Label>
              <Input
                h={20}
                borderRadius={10}
                focusOutlineColor={colors.white}
                backgroundColor={colors.body}
                type="text"
                fontSize="lg"
              />
              <FormControl.ErrorMessage
              // leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Email is required
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Button
            onPress={() => {
              navigation.navigate('Tab');
            }}
            _text={{fontSize: 'lg'}}
            shadow={5}
            backgroundColor={colors.darkgrey}
            borderLeftRadius={7}
            borderRightRadius={0}
            w="60%"
            h="42px"
            alignSelf="flex-end"
            my={5}
            marginTop={12}>
            Send
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HelpFeedback;
