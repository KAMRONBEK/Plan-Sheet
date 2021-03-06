import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import strings from '../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import Touchable from './Touchable';

const ProductInCheckout = ({item, state, dispatch}) => {
  let {qty: selected} = state[item._id] || {};
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={{
            width: 60,
            height: 60,
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text>{item.title}</Text>
        <Text>
          {item.price} {strings.priceUnit}
        </Text>
      </View>
      <View>
        <View style={styles.sickSelector}>
          <Touchable
            onPress={() => {
              dispatch({type: 'DECREMENT', id: item._id});
            }}>
            <View style={styles.minus}>
              <MaterialIcons
                name="remove"
                size={20}
                style={{
                  color: selected === 0 ? colors.paleGray : colors.green,
                }}
              />
            </View>
          </Touchable>
          <View style={styles.numberWrapper}>
            <Text style={styles.number}>{selected ? selected : 0}</Text>
          </View>
          <Touchable
            onPress={() => {
              dispatch({type: 'INCREMENT', id: item._id});
            }}>
            <View style={styles.plus}>
              <MaterialIcons
                name="add"
                size={20}
                style={{
                  color: colors.green,
                }}
              />
            </View>
          </Touchable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.borderGray,
  },
  imageWrapper: {},
  textWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sickSelector: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0,
    // borderRadius: 16,
    backgroundColor: colors.grayish,
    // elevation: 2,
  },
  plus: {
    width: 40,
    alignItems: 'center',
    // marginLeft: -10,
    paddingHorizontal: 5,
    paddingVertical: 6,
    marginTop: -1,
    backgroundColor: colors.borderGray,
  },
  minus: {
    width: 40,
    alignItems: 'center',
    // marginRight: -10,
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  numberWrapper: {
    width: 40,
    height: 35,
    // borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductInCheckout;
