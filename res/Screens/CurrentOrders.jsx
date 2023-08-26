import {Box, HStack, Heading, ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import colors from '../Assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {ordersAction} from '../Redux/Actions';
import AsyncStorage from '@react-native-community/async-storage';
import {Table, Row} from 'react-native-table-component';

const CurrentOrders = () => {
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();

  const [foundOrders, setFoundOrders] = useState([]);

  const getEmailFromStorage = async () => {
    const email = await AsyncStorage.getItem('userEmail');
    console.log('async email', email);
    const filteredOrders = orders.data.filter(
      order => order.attributes.email === email,
    );
    console.log('found orders', filteredOrders);
    setFoundOrders(filteredOrders);
  };

  useEffect(() => {
    dispatch(ordersAction());
    getEmailFromStorage();
  }, []);
  const tableHead = [
    'Order',
    'Name',
    'Email',
    'Items',
    'Total Amount',
    'Status',
  ];
  const tableData = foundOrders.map(order => [
    order.id,
    order.attributes.name,
    order.attributes.email,
    order.attributes.items,
    order.attributes.amount.toString(),
    order.attributes.approved ? 'Approved' : 'Pending',
  ]);
  return (
    <Box backgroundColor={colors.white} h="100%" w="100%">
      {foundOrders.length === 0 ? (
        <Heading w="50%" textAlign="center" alignSelf="center">
          You don't have any current orders yet
        </Heading>
      ) : (
        <Table>
          <Row
            data={tableHead}
            flexArr={[0.6, 1, 1.5, 1, 1, 1, 1]}
            style={{height: 50, backgroundColor: colors.body}}
            textStyle={{textAlign: 'center', fontWeight: 'bold'}}
          />
          {tableData.map((rowData, index) => (
            <ScrollView>
              <Row
                key={index}
                data={rowData}
                flexArr={[0.6, 1.2, 1.5, 1, 1, 1, 1]}
                style={{height: 80}}
                textStyle={{textAlign: 'center'}}
              />
            </ScrollView>
          ))}
        </Table>
      )}
    </Box>
  );
};

export default CurrentOrders;
