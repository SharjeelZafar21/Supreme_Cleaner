import {
  Box,
  Button,
  Checkbox,
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import colors from '../Assets/colors';
import BasePriceGuide from '../Components/BasePriceGuide';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

const DryClean = ({navigation, route}) => {
  const GetSERVICE = gql`
    query Services($Slug: String!) {
      services(filters: {Slug: {eq: $Slug}}) {
        data {
          attributes {
            ServiceName
            HeaderImage {
              data {
                attributes {
                  url
                }
              }
            }
            Description
            Categories {
              id
              Name
              From
              PriceList {
                id
                item
                price
              }
              info
            }

            Faqs {
              id
              Question
              Answer
            }
          }
        }
      }
    }
  `;

  const [selectedItems, setSelectedItems] = useState([]);
  const slug = route.params.slug;
  const title = route.params.title;

  const {data, loading, error} = useQuery(GetSERVICE, {
    variables: {Slug: slug},
  });

  console.log('price list', data);

  const handleCheckboxChange = item => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter(
          selectedItem => selectedItem.label !== item.label,
        );
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const handleAddToCart = () => {
    // You can use the selectedItems array to add the selected items to the cart
    console.log('Selected Items:', selectedItems);
    navigation.navigate('Cart', {selectedItems: selectedItems});
  };

  return (
    <Box backgroundColor="white" h="100%" w="100%">
      <HStack marginTop="10px" justifyContent="space-around">
        <Heading w="50%">{title} Price Guide</Heading>
        <Button bgColor={colors.primary} h="50px" onPress={handleAddToCart}>
          Add to Cart
        </Button>
      </HStack>
      <ScrollView>
        {data ? (
          data.services.data[0].attributes.Categories.map(category => (
            <BasePriceGuide
              key={category.id}
              selectedItems={selectedItems}
              onCheckboxChange={handleCheckboxChange}
              title={category.Name}
              items={category}
            />
          ))
        ) : (
          <Heading>There is no price list yet</Heading>
        )}
      </ScrollView>
    </Box>
  );
};

export default DryClean;
