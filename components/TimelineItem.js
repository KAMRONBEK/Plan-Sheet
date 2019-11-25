import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import strings from '../localization/strings';
import CardView from 'react-native-cardview';

const timelineItem = ({item}) => {
    return (
        <React.Fragment>
            {/*<View style={styles.shadow}/>*/}
            <View style={styles.container}>
                <Text style={[styles.price, {
                    color: item.income ? colors.green : colors.red,
                }]}>
                    {item.income ? '+' : '-'}{item.price} {strings.uzs}
                </Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.text}>{item.time}</Text>
                </View>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        // borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        marginHorizontal:2,
        backgroundColor: colors.white,
        // marginTop: -52,
        // elevation:1
    },
    price: {
        fontSize: 17,
        width: 250,
    },
    text: {
        color: colors.textGray,
        fontSize: 15,
    },
    shadow: {
        marginTop:25,
        backgroundColor: '#fafafa',
        borderRadius: 15,
        padding: 27,
    },
});

export default timelineItem;
