
import React from 'react'
import {Box, HStack,Heading, Input, ScrollView, Text, VStack} from 'native-base';
import BaseCard from '../Components/BaseCard';

const Home = ({navigation}) => {
  return (
    <Box height="100%" width="100%">
      <Heading
        marginTop="20px"
        color="#32cd32"
        marginLeft="10px">
        Services
      </Heading>
      <Text marginLeft="10px" fontSize="md" >
        How can we help?
      </Text>
      <ScrollView h="100%" w="100%">
        {/* <VStack backgroundColor="white" w="95%" alignSelf="center" m={3}> */}
          {/* <HStack space={1}> */}
            <BaseCard
              onPress={() => {
                navigation.navigate('DryClean', {
                  GigsCategory: 'flex',
                });
              }}
              title="Dry Clean"
              image_url={require('../Assets/dryclean.jpg')}
              description="Silk, linen, cashmere, we can clean anything with a “dry cleaning only” label. Our process combines artisan care with eco technologies for high-quality result."
            />
            <BaseCard
              onPress={() => {
                navigation.navigate('Loundary', {
                  GigsCategory: 'banner',
                });
              }}
              title="Loundary Wash & Fold"
              image_url={require('../Assets/loundary.jpg')}
              description="Why not take laundry off your to-do list and put it on ours? For your everyday laundry, we offer a convenient ‘Wash & Fold’ service, priced by the load."
            />
          {/* </HStack> */}
          {/* <HStack space={1}> */}
            <BaseCard
              onPress={() => {
                navigation.navigate('Bedding', {
                  GigsCategory: 'digital-marketing',
                });
              }}
              title="Home & Bedding"
              image_url={require('../Assets/bedding.jpg')}
              description="Bed linen, duvets, pillows, sofa covers, curtains, rugs... We clean all household items, no matter how bulky!"
            />
            <BaseCard
              onPress={() => {
                navigation.navigate('ShirtService', {
                  GigsCategory: 'flyer',
                });
              }}
              title="Shirt Services"
              image_url={require('../Assets/shirt.jpg')}
              description="For anyone who's got a packed schedule, our quality hand-finished shirt service is the perfect lifehack! At SUPREME we provide a leading natural"
            />
        {/* </VStack> */}
      </ScrollView>
    </Box>
  )
}

export default Home