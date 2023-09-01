import {Box, HStack, Heading, ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import colors from '../Assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {ordersAction} from '../Redux/Actions';
import AsyncStorage from '@react-native-community/async-storage';
import {Table, Row} from 'react-native-table-component';
import {RefreshControl} from 'react-native';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/client';

const CurrentOrders = () => {
  const GET_ORDERS_QUERY = gql`
    query GetORDERS($email: String!) {
      orders(filters: {email: {eq: $email}}) {
        data {
          id
          attributes {
            name
            email
            phone
            address
            items
            amount
            cellphone
            city
            postcode
            note
            approved
          }
        }
      }
    }
  `;
  const [orders, setOrders] = useState([]);
  const [email, setEmail] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const {loading, error, data, refetch} = useQuery(GET_ORDERS_QUERY, {
    variables: {email},
  });

  console.log('data ', data?.orders?.data);

  console.log('orders', orders);

  const getEmailFromStorage = async () => {
    const email = await AsyncStorage.getItem('userEmail');
    setEmail(email);
    console.log('async email', email);
  };

  useEffect(() => {
    getEmailFromStorage();
    if (data) {
      setOrders(data.orders.data);
    }
  }, [data]);

  const onRefresh = () => {
    setRefreshing(true); // Set refreshing to true
    refetch(); // Fetch data again
    setRefreshing(false); // Set refreshing back to false once data is fetched
  };

  const commpleteOrders = orders.filter(order => order.attributes.approved);

  console.log('complete orders', commpleteOrders);

  const tableHead = [
    'Order',
    'Name',
    'Email',
    'Items',
    'Total Amount',
    'Status',
  ];
  const tableData = commpleteOrders.map(order => [
    order.id,
    order.attributes.name,
    order.attributes.email,
    order.attributes.items,
    order.attributes.amount.toString(),
    order.attributes.approved ? 'Approved' : 'Pending',
  ]);
  return (
    <Box backgroundColor={colors.white} h="100%" w="100%">
      <ScrollView
        refreshControl={
          // Attach the RefreshControl component to ScrollView
          <RefreshControl
            refreshing={refreshing} // Pass the refreshing status
            onRefresh={onRefresh} // Call the onRefresh function
          />
        }>
        {commpleteOrders.length === 0 ? (
          <Heading w="50%" textAlign="center" alignSelf="center">
            You don't have any past orders yet
          </Heading>
        ) : (
          <Table>
            <Row
              data={tableHead}
              flexArr={[0.6, 1.5, 1, 1, 1, 1, 1]}
              style={{height: 50, backgroundColor: colors.body}}
              textStyle={{textAlign: 'center', fontWeight: 'bold'}}
            />
            {tableData.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                flexArr={[0.6, 1.5, 1, 1, 1, 1, 1]}
                style={{marginTop: 15}}
                textStyle={{textAlign: 'center'}}
              />
            ))}
          </Table>
        )}
      </ScrollView>
    </Box>
  );
};

export default CurrentOrders;
