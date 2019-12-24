import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import React, {useEffect, useReducer} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilledButton from '../../components/FilledButton';
import ProductInCheckout from '../../components/ProductInCheckout';
import Touchable from '../../components/Touchable';
import colors from '../../constants/colors';
import {GET_PRODUCT_DATA, ADD_TO_ORDER} from '../../graphql/requests';
import strings from '../../localization/strings';

const Checkout = ({navigation, item, modalOn}) => {
  let [getProductData, {loading, data, error}] = useLazyQuery(GET_PRODUCT_DATA);
  let [add, {data: addData}] = useMutation(ADD_TO_ORDER);
  let reducer = (state, {type, id}) => {
    switch (type) {
      case 'INCREMENT': {
        let element = state[id];
        if (!element) {
          return {...state, [id]: {qty: 1}};
        }
        return {...state, [id]: {qty: element.qty + 1}};
      }
      case 'DECREMENT': {
        let element = state[id];
        if (!element) {
          return state;
        }
        return {...state, [id]: {qty: element.qty > 0 ? element.qty - 1 : 0}};
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    if (item) {
      getProductData({
        variables: {
          product_id: item._id,
        },
      });
    }
    if (addData) {
      console.warn(addData);
    }
  }, [addData, data, getProductData, item]);

  const alerter = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: strings.cancel,
          onPress: () => console.warn('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: strings.ordering,
          onPress: () => {
            completeOrder();
            modalOn(false);
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };
  const completeOrder = () => {
    let stock = Object.keys(state).map(key => {
      let {qty} = state[key];
      return {_id: key, qty};
    });
    add({variables: {input: {product_id: item._id, stock}}});
  };

  let totalCount = 0;
  let totalPrice = 0;
  if (Object.keys(state).length > 0) {
    Object.keys(state).forEach(key => {
      let el = state[key];
      totalCount += el.qty;
      totalPrice = el.qty * item.price;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
            }}
            source={{
              uri: item && item.images[0],
            }}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{item && item.name}</Text>
          <Text style={styles.text}>
            {strings.minimumOrder} {item && item.min_order}
          </Text>
          <Text style={styles.price}>
            {item && item.price} {strings.priceUnit}
          </Text>
        </View>
        <View
          style={{
            marginRight: -10,
            marginTop: -5,
          }}>
          <Touchable
            onPress={() => {
              modalOn(false);
            }}>
            <MaterialIcons name="close" size={30} color={colors.white} />
          </Touchable>
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.contentTitle}>{strings.option}:</Text>
        </View>
        <View>
          {loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          ) : (
            <FlatList
              style={{
                height: 300,
              }}
              data={data && data.getProductById.stock}
              keyExtractor={el => el._id}
              renderItem={({item: el}) => (
                <ProductInCheckout
                  item={el}
                  state={state}
                  dispatch={dispatch}
                />
              )}
            />
          )}
        </View>
        <View style={styles.bottomWrapper}>
          <View style={styles.overall}>
            <Text
              style={{
                color: colors.green,
              }}>
              {Object.keys(state).length}{' '}
            </Text>
            <Text>
              {strings.type},{'  '}
            </Text>
            <Text
              style={{
                color: colors.green,
              }}>
              {totalCount}{' '}
            </Text>
            <Text>
              {strings.piece}, {strings.totalPrice}:{'  '}
            </Text>
            <Text
              style={{
                color: colors.green,
              }}>
              {totalPrice}{' '}
            </Text>
            <Text>{strings.uzs}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Touchable
              onPress={() => {
                console.warn('some');
                alerter();
              }}>
              <View>
                <FilledButton text={strings.ordering} />
              </View>
            </Touchable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 480,
    backgroundColor: colors.white,
    // borderBottomRightRadius: 40,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.green,
    // borderBottomRightRadius: 40,
  },
  imageWrapper: {
    overflow: 'hidden',
    height: 85,
    width: 85,
    // borderRadius: 10,
  },
  textWrapper: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 7,
  },
  price: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  content: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  contentTitle: {
    fontSize: 20,
    color: colors.black,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  bottomWrapper: {
    alignItems: 'center',
  },
  overall: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingTop: 60,
  },
  buttonWrapper: {
    paddingHorizontal: 100,
  },
});

export default Checkout;
