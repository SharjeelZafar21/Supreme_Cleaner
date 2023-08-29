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
      <HStack justifyContent="space-around">
        <Heading w="75%">{title}</Heading>
        <Text fontSize="lg" w="20%">
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
                selectedItem => selectedItem.item === item.item,
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
