import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const BonusItem = ({navigation, item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={{
                        uri: item.image,
                    }}
                    style={{
                        height: 150,
                        width: 130,
                        resizeMode: 'cover',
                    }}
                />
            </View>
            <View style={styles.nameWrapper}>
                <Text style={{
                }}>{item.name}</Text>
            </View>
            <View style={styles.bottomWrapper}>
                <View style={styles.bonus}>
                    <Text>icon</Text>
                    <Text>{item.cost}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    nameWrapper: {
        flex:1,
        borderWidth:1
    },
});

export default BonusItem;
