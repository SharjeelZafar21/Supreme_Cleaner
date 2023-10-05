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

const BaseCard = ({title, image_url, onPress, description, key}) => {
  console.log('image url', image_url);
  return (
    <Pressable
      key={key}
      borderRadius={10}
      onPress={onPress}
      margin={2.5}
      // h="sm"
      w="95%"
      alignSelf="center"
      backgroundColor="white">
      <Image
        borderTopRadius={12}
        alignSelf="center"
        height="xs"
        w="100%"
        source={{uri: image_url}}
        alt="Image"
      />
      <Heading margin="10px">{title}</Heading>
      <Text
        marginLeft="10px"
        marginRight="10px"
        marginBottom="10px"
        fontSize="lg">
        {description}
      </Text>
    </Pressable>
  );
};

export default BaseCard;
