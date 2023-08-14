import { Box, Button, Checkbox, HStack, Heading, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import colors from '../Assets/colors'
import BasePriceGuide from '../Components/BasePriceGuide'

const Loundary_Wash = () => {
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
        Loundary Wash & Fold Price Guide
      </Heading>
      <Button bgColor={colors.primary} h="50px">Add to Cart</Button>
    </HStack>
    <ScrollView>
    <BasePriceGuide title="Tops" items={tops} />
    <BasePriceGuide title="Trousers" items={trousers} />
    <BasePriceGuide title="Dresses" items={dresses} />
    <BasePriceGuide title="Jackets & Coats" items={jackets} />
    <BasePriceGuide title="Sportswear" items={sportswear} />
    <BasePriceGuide title="Accessories" items={accessories} />
    </ScrollView>
  </Box>
  )
}

export default Loundary_Wash