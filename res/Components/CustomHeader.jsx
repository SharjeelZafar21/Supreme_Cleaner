import {View, Text} from 'react-native';
import React from 'react';
import {HStack, Icon, Image, Link} from 'native-base';
import Logo from './Logo';
import Icons from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <HStack alignItems="center" space="1/3">
      <Logo />
      <HStack alignItems="center" marginLeft={8}>
        <Image
          source={require('../Assets/price.jpg')}
          size="9"
          resizeMode="contain"
          alt="price"
        />
        <Link
          _text={{fontSize: 'lg'}}
          onPress={() => {
            navigation.navigate('Price');
          }}>
          Prices
        </Link>
      </HStack>
    </HStack>
  );
};

export default CustomHeader;
