import {Box, Heading} from 'native-base';
import React from 'react';
import colors from '../Assets/colors';

const CurrentOrders = () => {
  return (
    <Box
      backgroundColor={colors.white}
      h="100%"
      w="100%"
      justifyContent="center">
      <Heading w="50%" textAlign="center" alignSelf="center">
        You don't have any current orders yet
      </Heading>
    </Box>
  );
};

export default CurrentOrders;
