import {Image} from 'native-base';
import React from 'react';

const Logo = () => {
  return (
    <Image
      source={require('../Assets/Logo1.jpg')}
      size="sm"
      w="48"
      // resizeMode="stretch"
      alt="logo"
    />
  );
};

export default Logo;
