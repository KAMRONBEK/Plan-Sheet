import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from './SearchBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <MaterialIcons
        name="filter-list"
        size={40}
        style={{
          color: colors.green,
          marginBottom: -5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
