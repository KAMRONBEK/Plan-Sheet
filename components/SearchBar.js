import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import strings from '../localization/strings';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';

const SearchBar = () => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.green,
        },
      ]}>
      <TextInput placeholder={strings.searchProduct} style={styles.input} />
      <Feather name="search" size={30} style={{color: colors.green}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 5,
    borderBottomWidth: 1,
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 20,
  },
});

export default SearchBar;
