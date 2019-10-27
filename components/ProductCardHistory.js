import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import strings from '../localization/strings';

const ProductCardHistory = ({item}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.borderGray,
        },
      ]}>
      <View
        style={[
          styles.image,
          {
            borderColor: colors.borderGray,
          },
        ]}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: 150,
            height: 150,
            resizeMode: 'cover',
          }}
        />
      </View>

      <View style={styles.first}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.textWrap}>
          <Text>{strings.inStock}</Text>
          <Text>
            {item.remaining} {strings.piece}
          </Text>
        </View>
        <View style={styles.textWrap}>
          <Text>{strings.minimumOrder}</Text>
          <Text>
            {item.minimumOrder} {strings.piece}
          </Text>
        </View>
      </View>
      <View style={styles.textWrap}>
        <Text>{strings.manufacturer}</Text>
        <Text>{item.manufacturer}</Text>
      </View>
      <View style={styles.textWrap}>
        <Text>{strings.price}</Text>
        <Text>
          {item.price} {strings.priceUnit}
        </Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.topTextWrap}>
          <Text></Text>
          <Text></Text>
        </View>
        <View style={styles.textWrap}></View>
      </View>
      <View style={styles.last}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  image: {
    overflow: 'hidden',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: -15,
    marginLeft: 15,
  },
  first: {
    borderWidth: 1,
  },
});

export default ProductCardHistory;
