import { Box, Button, Checkbox, HStack, Heading, ScrollView, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import colors from '../Assets/colors'
import BasePriceGuide from '../Components/BasePriceGuide'

const DryClean = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((selectedItem) => selectedItem.label !== item.label);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const handleAddToCart = () => {
    // You can use the selectedItems array to add the selected items to the cart
    console.log('Selected Items:', selectedItems);
  };

  const tops = [
    { label: 'Delicate top/blouse', price: 'R223.00' },
    { label: 'Evening Shirt', price: 'R1223.00' },
    { label: 'KnitWear', price: 'R2223.00' },
    { label: 'Linen Shirt', price: 'R2223.00' },
    { label: 'Polo Shirt', price: 'R2223.00' },
  ];
  const trousers = [
    { label: 'Suit Trousers', price: 'R223.00' },
    { label: 'Trousers', price: 'R1223.00' },
    { label: 'Barmuda Shorts', price: 'R2223.00' },
    { label: 'Jogging Trousers', price: 'R2223.00' },
    { label: 'Leather Trousers', price: 'R2223.00' },
  ];
  const dresses = [
    { label: 'Dress', price: 'R223.00' },
    { label: 'Skirt', price: 'R1223.00' },
    { label: 'Jumpsuit (short)', price: 'R2223.00' },
    { label: 'Jumpsuit (long)', price: 'R2223.00' },
    { label: 'Cocktail Dress', price: 'R2223.00' },
    { label: 'Evening Dress', price: 'R2223.00' },
  ];
  const jackets = [
    { label: 'Suit Trousers', price: 'R223.00' },
    { label: 'Trousers', price: 'R1223.00' },
    { label: 'Barmuda Shorts', price: 'R2223.00' },
    { label: 'Jogging Trousers', price: 'R2223.00' },
    { label: 'Leather Trousers', price: 'R2223.00' },
  ];
  const sportswear = [
    { label: 'Suit Trousers', price: 'R223.00' },
    { label: 'Trousers', price: 'R1223.00' },
    { label: 'Barmuda Shorts', price: 'R2223.00' },
    { label: 'Jogging Trousers', price: 'R2223.00' },
    { label: 'Leather Trousers', price: 'R2223.00' },
  ];
  const accessories = [
    { label: 'Suit Trousers', price: 'R223.00' },
    { label: 'Trousers', price: 'R1223.00' },
    { label: 'Barmuda Shorts', price: 'R2223.00' },
    { label: 'Jogging Trousers', price: 'R2223.00' },
    { label: 'Leather Trousers', price: 'R2223.00' },
  ];
  return (
    <Box backgroundColor="white" h="100%" w="100%">
      <HStack marginTop="10px" justifyContent="space-around">
        <Heading w="50%">
          Dry Cleaning Price Guide
        </Heading>
        <Button bgColor={colors.primary} h="50px" onPress={handleAddToCart}>Add to Cart</Button>
      </HStack>
      <ScrollView>
      <BasePriceGuide selectedItems={selectedItems} onCheckboxChange={handleCheckboxChange} title="Tops" items={tops} />
      <BasePriceGuide selectedItems={selectedItems} onCheckboxChange={handleCheckboxChange} title="Trousers" items={trousers} />
      <BasePriceGuide selectedItems={selectedItems} onCheckboxChange={handleCheckboxChange} title="Dresses" items={dresses} />
      <BasePriceGuide selectedItems={selectedItems} onCheckboxChange={handleCheckboxChange} title="Jackets & Coats" items={jackets} />
      <BasePriceGuide selectedItems={selectedItems} onCheckboxChange={handleCheckboxChange} title="Sportswear" items={sportswear} />
      <BasePriceGuide selectedItems={selectedItems} onCheckboxChange={handleCheckboxChange} title="Accessories" items={accessories} />
      </ScrollView>
    </Box>
  )
}

export default DryClean