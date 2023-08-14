import React from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Pressable,
  Text,
} from 'native-base';

const BaseCard = ({title, image_url, onPress,description}) => {
  return (
    <Pressable onPress={onPress} marginTop={5} h="500px" w="95%" alignSelf="center" backgroundColor="white">
        <Image
          alignSelf="center"
          height="60%"
          source={image_url}
          alt="Image"
        />
        <Heading
          margin="15px">
          {title}
        </Heading>
        <Text marginLeft="20px" marginRight="10px" fontSize="lg">
          {description}
        </Text>
    </Pressable>
  );
};

export default BaseCard;
