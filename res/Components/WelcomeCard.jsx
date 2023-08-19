import {TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../Assets/colors';
import {HStack, Pressable, Text} from 'native-base';
// import Icons from '../Assets/icons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const WelcomeCard = ({
  onPress,
  title,
  icon1Name,
  icon2Name,
  textColor,
  bgColor,
}) => {
  return (
    <Pressable onPress={onPress}>
      <HStack
        backgroundColor={bgColor}
        h="90px"
        w="90%"
        my={3}
        borderRadius={8}
        shadow={5}
        alignItems="center"
        justifyContent="space-around"
        alignSelf="center">
        <Icons name={icon1Name} size={35} color={textColor} />
        <Text fontSize="xl" color={textColor}>
          {title}
        </Text>
        <Icons name={icon2Name} size={25} color={textColor} />
      </HStack>
    </Pressable>
  );
};

export default WelcomeCard;
