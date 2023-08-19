import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {PieChart} from 'react-native-svg-charts';

const data = [
  {
    key: 1,
    value: 50,
    svg: {fill: 'green'},
    arc: {outerRadius: '70%', cornerRadius: 0},
    // onPress: () => console.log('Pressed slice 1'),
  },
  {
    key: 2,
    value: 50,
    svg: {fill: 'white'},
    arc: {outerRadius: '70%', cornerRadius: 0},
    // onPress: () => console.log('Pressed slice 1'),
  },
];

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <PieChart style={{height: 100, width: 100}} data={data} animate>
        <Text style={{fontSize: 14}}>{data[0].value}%</Text>
      </PieChart>
    </View>
  );
};

export default Profile;
