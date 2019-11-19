import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import strings from '../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RoundedButton from './RoundedButton';
import CircleButton from './CircleButton';
import FilledButton from './FilledButton';
import Touchable from './Touchable';

const ProductCard = ({item, navigation, modalOn, setItem}) => {
    const {navigate} = navigation;
    return (
        <View
            style={styles.container}>
            <View
                style={styles.image}>
                <Image
                    source={{
                        uri: item.image,
                    }}
                    style={{
                        flex: 1,
                        resizeMode: 'cover',
                    }}
                />
            </View>
            <View style={styles.content}>
                <Touchable onPress={() => navigate('Product', {item: item})}>
                    <View style={styles.textWrap}>
                        {/*<Touchable>*/}
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.title}>
                            {item.name}
                        </Text>
                        <Text style={styles.price}>
                            {item.minimumOrder} {strings.piece}
                        </Text>
                        <Text style={styles.price}>
                            {item.price} {strings.priceUnit}
                        </Text>
                    </View>
                </Touchable>
                <Touchable onPress={() => {
                    modalOn(true);
                    console.warn('some');
                    setItem(item.id);
                }
                }>
                    <View style={styles.buttonWrapper}>
                        <FilledButton text={strings.ordering}/>
                    </View>
                </Touchable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        // marginVertical: 10,
        borderRadius: 15,
        flexDirection: 'row',
    },
    image: {
        overflow: 'hidden',
        height: 85,
        width: 85,
        borderWidth: 0.5,
        // borderRadius: 15,
        borderColor: colors.borderGray,
        // marginTop: 15,
        // marginBottom: -15,
        // marginLeft: 15,
    },
    textWrap: {
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 82,
        paddingBottom: 20,
    },
    content: {
        marginLeft: 10,
        borderBottomWidth: 0.6,
        borderColor: colors.borderGray,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // paddingHorizontal: 10,
        justifyContent: 'center',
    },
    title: {
        // fontSize: 17,
        flex: 1,
        textAlign: 'center',
        // marginHorizontal:15,
        // width: 100,
        marginRight: 20,
    },
    price: {
        marginRight: 30,
    },
  buttonWrapper:{
        marginBottom:20
  }
});

export default ProductCard;
