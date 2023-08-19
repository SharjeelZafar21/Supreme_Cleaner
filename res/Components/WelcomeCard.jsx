import {TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../Assets/colors';
import {HStack, Text} from 'native-base';
// import Icons from '../Assets/icons';
import Icons from 'react-native-vector-icons/EvilIcons';

const WelcomeCard = ({
  onPress,
  title,
  icon1Name,
  icon2Name,
  textColor,
  bgColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack
        backgroundColor={bgColor}
        h="80px"
        w="90%"
        my={3}
        borderRadius={5}
        shadow={9}
        alignItems="center"
        justifyContent="space-evenly"
        alignSelf="center">
        <Icons name={icon1Name} size={35} color={textColor} />
        <Text fontSize="xl" color={textColor}>
          {title}
        </Text>
        <Icons name={icon2Name} size={35} color={textColor} />
      </HStack>
    </TouchableOpacity>
  );
};

export default WelcomeCard;
