import React from 'react';
import {Box, Heading} from 'native-base';
import colors from '../Assets/colors';

const PastOrders = () => {
  return (
    <Box
      backgroundColor={colors.white}
      h="100%"
      w="100%"
      justifyContent="center">
      <Heading w="70%" textAlign="center" alignSelf="center">
        You don't have any past orders yet
      </Heading>
    </Box>
  );
};

export default PastOrders;
