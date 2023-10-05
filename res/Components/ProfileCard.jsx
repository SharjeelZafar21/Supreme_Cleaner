import React from 'react';
import {HStack, Pressable, Text} from 'native-base';
import Icons from '../Assets/icons';
import colors from '../Assets/colors';

const ProfileCard = ({iconName, title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <HStack my={4} w="80%" justifyContent="space-between">
        <Icons name={iconName} color={colors.primary} size={35} />
        <Text w="80%" fontSize="xl">
          {title}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default ProfileCard;
