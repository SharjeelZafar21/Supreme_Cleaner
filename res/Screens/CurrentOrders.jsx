import {Box, Heading} from 'native-base';
import React, {useEffect} from 'react';
import colors from '../Assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {ordersAction} from '../Redux/Actions';

const CurrentOrders = () => {
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  console.log('orders in current', orders);
  useEffect(() => {
    dispatch(ordersAction());
  }, []);
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
