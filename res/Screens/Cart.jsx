import React, {useState} from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  HStack,
  Heading,
  Input,
  ScrollView,
  Text,
} from 'native-base';
import colors from '../Assets/colors';

const Cart = ({route, navigation}) => {
  const selectedItems = route.params.selectedItems;
  const initialQuantities = selectedItems.map(item => 1);
  const [quantities, setQuantities] = useState(initialQuantities);

  const handleMinusPress = index => {
    if (quantities[index] > 1) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  const handlePlusPress = index => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  // Calculate the individual sum of each item
  const individualSums = selectedItems.map((item, index) => {
    return item.price * quantities[index];
  });

  // Calculate the total sum of all items
  const totalSum = individualSums.reduce((sum, itemSum) => sum + itemSum, 0);

  return (
    <Box h="100%" w="100%" bg={colors.white}>
      <ScrollView mx={5}>
        <Heading textAlign="center" size="2xl" my={10}>
          Shoping Cart
        </Heading>
        <Heading my={5}>Cart Items</Heading>

        {selectedItems.map((item, index) => (
          <React.Fragment key={item.item}>
            <Heading my={5}>{item.item}</Heading>
            <Text fontSize="lg" fontWeight="bold" my={2}>
              R{item.price}
            </Text>
            <HStack>
              <Text fontSize="xl" alignSelf="center">
                Quantity:
              </Text>
              <HStack alignItems="center" mx={2}>
                <Button
                  h={10}
                  w={12}
                  backgroundColor={colors.primary}
                  onPress={() => {
                    handleMinusPress(index);
                  }}>
                  Min
                </Button>
                <Text
                  px={5}
                  h={10}
                  py={1}
                  alignSelf="center"
                  fontSize="xl"
                  bg={colors.body}>
                  {quantities[index]}
                </Text>
                <Button
                  h={10}
                  w={12}
                  backgroundColor={colors.primary}
                  onPress={() => {
                    handlePlusPress(index);
                  }}>
                  Max
                </Button>
              </HStack>
            </HStack>
            <Divider my={5} thickness={1} _light={{bg: colors.black}} />
          </React.Fragment>
        ))}

        <Heading my={5}>Summary</Heading>
        <Box bg={colors.body} px={5} py={5} borderRadius={8}>
          <HStack justifyContent="space-between">
            <Heading fontSize="lg">SUBTOTAL</Heading>
            <Heading fontSize="lg">R{totalSum}</Heading>
          </HStack>
          <Divider my={5} thickness={1} _light={{bg: colors.black}} />
          <Text>
            The subtotal reflects the total price of your order, including
            duties and taxes, before any applicable discounts. It does not
            include delivery costs and international transaction fees.
          </Text>
        </Box>
        <Button
          h={12}
          bg={colors.primary}
          my={5}
          _text={{fontSize: 20}}
          onPress={() => {
            navigation.navigate('Post Order');
          }}>
          Checkout
        </Button>
      </ScrollView>
    </Box>
  );
};

export default Cart;
