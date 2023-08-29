import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import BaseCard from '../Components/BaseCard';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

const Price = ({navigation}) => {
  const SERVICES = gql`
    query GetServices {
      services {
        data {
          id

          attributes {
            ServiceName
            Slug
            Excerpt
            FeaturedImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
  const {data, loading, error} = useQuery(SERVICES);
  console.log('services', data);
  console.log('error', error);
  // console.log('image url', data.services?.data?.attributes);
  return (
    <Box height="100%" width="100%">
      <Heading marginTop="20px" color="#32cd32" marginLeft="10px">
        Services
      </Heading>
      <Text marginLeft="10px" fontSize="md">
        How can we help?
      </Text>
      <ScrollView h="100%" w="100%">
        {data ? (
          data.services?.data.map(item => (
            <BaseCard
              key={item.id}
              onPress={() => {
                navigation.navigate('DryClean', {
                  slug: item.attributes.Slug,
                  title: item.attributes.ServiceName,
                });
              }}
              title={item.attributes.ServiceName}
              image_url={item.attributes.FeaturedImage.data[0].attributes.url}
              description={item.attributes.Excerpt}
            />
          ))
        ) : (
          <Heading>There are no services yet</Heading>
        )}
      </ScrollView>
    </Box>
  );
};

export default Price;
