import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';

const Favorite = ({navigation}) => {
  return (
    <View>
        <Header navigation={navigation}/>

        <Text>Favorite</Text>
    </View>
  );
};

export default Favorite;
