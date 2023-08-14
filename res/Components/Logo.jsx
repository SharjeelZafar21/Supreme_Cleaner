import {Image} from 'native-base';
import React from 'react';

const Logo = () => {
  return (
    <Image
      source={require('../Assets/Logo.png')}
      size="sm"
      resizeMode="contain"
      alt="logo"
    />
  );
};

export default Logo;
