import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Touchable from './Touchable';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RoundedButton = ({text, onPress}) => {
  return (
    <Touchable onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.superPaleGray,
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: colors.green,
            },
          ]}>
          {text}
        </Text>
        <MaterialIcons
          name="local-shipping"
          size={30}
          color={colors.darkGray}
          style={{
            marginLeft: 20,
          }}
        />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 60,
    minWidth: 200,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {fontSize: 25, fontWeight: '400'},
});

export default RoundedButton;
