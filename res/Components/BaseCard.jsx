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
      marginTop={5}
      h={450}
      w="95%"
      alignSelf="center"
      backgroundColor="white">
      <Image
        borderTopRadius={10}
        alignSelf="center"
        height="60%"
        w="100%"
        source={{uri: image_url}}
        alt="Image"
      />
      <Heading margin="15px">{title}</Heading>
      <Text marginLeft="20px" marginRight="10px" fontSize="lg">
        {description}
      </Text>
    </Pressable>
  );
};

export default BaseCard;
