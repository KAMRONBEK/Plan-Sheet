import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import DrawerMenuItem from '../components/DrawerMenuItem';
import colors from '../constants/colors';
import strings from '../localization/strings';

let DrawerContent = ({navigation}) => {
    const {navigate} = navigation;

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <View style={styles.logo}>
                    <Image style={{
                        height: 100,
                        width: 100,
                    }}
                           source={{
                               uri: 'https://web.getmonero.org/press-kit/symbols/monero-symbol-800.png',
                           }}
                    />
                </View>
                <View style={styles.topRight}>
                    <View style={styles.titleText}>
                        <Text style={[styles.title, {
                            color: colors.darkGray,
                        }]}>Plan</Text>
                        <Text style={[styles.title, {
                            color: colors.white,
                        }]}>Sheet</Text>
                    </View>
                    <Text style={{
                        color: colors.white,
                    }}>online savdo</Text>
                </View>
            </View>
            <View style={styles.banner}>
                <Image style={{
                    height: 200,
                    resizeMode: 'contain',
                    borderRadius: 30,
                }}
                       source={{
                           uri: 'https://i.pinimg.com/originals/ee/46/03/ee4603ebe969881abe35adaf2d78e7f0.jpg',
                       }}
                />
            </View>
            <DrawerMenuItem
                text={strings.user}
                iconName="user"
                // onPress={()=>navigate('Profile',{})}
            />
            <DrawerMenuItem
                text={strings.category}
                iconName="list"
                onPress={()=>navigate('Category',{})}
            />
            <DrawerMenuItem
                text={strings.history}
                iconName="clock"
                onPress={()=>navigate('History',{})}

            />
            <DrawerMenuItem
                text={strings.favorite}
                iconName="heart"
                onPress={()=>navigate('Favorite',{})}

            />
            <DrawerMenuItem
                text={strings.orderStatus}
                iconName="truck"
                onPress={()=>navigate('Orders',{})}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        flex: 1,
    },
    logoWrapper: {
        // flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        padding: 20,
    },
    topRight: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        paddingVertical: 10,
        flex: 1,
    },
    titleText: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 30,
    },
    banner: {
        paddingHorizontal: 40,
        overflow: 'hidden',
    },
});

export default DrawerContent;
