import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';

const Category = ({navigation}) => {
  return (
    <View>
        <Header navigation={navigation}/>
        <Text>Category</Text>
    </View>
  );
};

export default Category;
