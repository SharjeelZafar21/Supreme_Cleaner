import React from 'react';
import { View, Text, Box, HStack, VStack, Checkbox, Heading } from 'native-base';
import colors from '../Assets/colors';

const BasePriceGuide = ({ title, items, selectedItems, onCheckboxChange }) => {
  return (
    <Box marginTop="20px">
      <HStack justifyContent="space-around">
        <Heading >
          {title}
        </Heading>
        <Text fontSize="lg">
          From
        </Text>
      </HStack>
      <VStack backgroundColor="gray.100" w="90%" alignSelf="center" my={2}>
        {items.map((item, index) => (
          <HStack key={index} m={2} justifyContent="space-between" w="100%">
            <Checkbox
              w="80%"
              value={item.label}
              isChecked={selectedItems.some((selectedItem) => selectedItem.label === item.label)}
              borderColor={colors.primary}
              colorScheme="green"
              onChange={() => onCheckboxChange(item)}
            >
              {item.label}
            </Checkbox>
            <Text marginRight={8}>
              {item.price}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default BasePriceGuide;
