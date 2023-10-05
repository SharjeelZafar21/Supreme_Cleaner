import React from 'react';
import {View, Text, Box, HStack, VStack, Checkbox, Heading} from 'native-base';
import colors from '../Assets/colors';

const BasePriceGuide = ({
  title,
  items,
  selectedItems,
  onCheckboxChange,
  key,
}) => {
  return (
    <Box marginTop="20px" key={key}>
      <HStack w="90%" alignSelf="center" justifyContent="space-between">
        <Heading w="80%">{title}</Heading>
        <Text fontSize="lg" mx={6}>
          From
        </Text>
      </HStack>
      <VStack backgroundColor="gray.100" w="90%" alignSelf="center" my={2}>
        {items.PriceList.map((item, index) => (
          <HStack key={index} m={2} justifyContent="space-between" w="100%">
            <Checkbox
              w="80%"
              value={item.price}
              isChecked={selectedItems.some(
                selectedItem => selectedItem.id === item.id,
              )}
              borderColor={colors.primary}
              colorScheme="green"
              onChange={() => onCheckboxChange(item)}>
              {item.item}
            </Checkbox>
            <Text marginRight={8}>R{item.price}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default BasePriceGuide;
