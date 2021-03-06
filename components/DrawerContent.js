import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import DrawerMenuItem from '../components/DrawerMenuItem';
import colors from '../constants/colors';
import strings from '../localization/strings';
import {connect} from 'react-redux';
import Touchable from './Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {userLogout} from '../actions/userActions';
import LanguageItem from './LanguageItem';

let DrawerContent = ({navigation, dispatch}) => {
    const {navigate} = navigation;

    //language
    let [uzOn, setUzOn] = useState(true);
    let [ruOn, setRuOn] = useState(false);
    let [engOn, setEngOn] = useState(false);

    useEffect(
        () => {
            console.warn('language changed');
        }, [uzOn, ruOn, engOn],
    );

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
            <ScrollView>
                <DrawerMenuItem
                    text={strings.homePage}
                    iconName="home"
                    to='Main'
                    navigation={navigation}
                />
                <DrawerMenuItem
                    text={strings.category}
                    iconName="list"
                    to='Category'
                    navigation={navigation}
                />
                <DrawerMenuItem
                    text={strings.history}
                    iconName="history"
                    to='History'
                    navigation={navigation}
                />
                <DrawerMenuItem
                    text={strings.wallet}
                    iconName="account-balance-wallet"
                    to='Wallet'
                    navigation={navigation}
                />
                <DrawerMenuItem
                    text={strings.activeOrders}
                    iconName="local-shipping"
                    to='Orders'
                    navigation={navigation}
                />
            </ScrollView>
            <View style={styles.lanWrapper}>
                <Touchable>
                    <LanguageItem text='uz' isActive={uzOn} onPress={() => {
                        strings.setLanguage('uz');
                        setUzOn(true);
                        setRuOn(false);
                        setEngOn(false);
                        navigation.toggleDrawer();
                        navigate('Main', {});
                    }}/>
                </Touchable>
                <Touchable>
                    <LanguageItem text='ru' isActive={ruOn} onPress={() => {
                        strings.setLanguage('ru');
                        setUzOn(false);
                        setRuOn(true);
                        setEngOn(false);
                        navigation.toggleDrawer();
                        navigate('Main', {});
                    }}/>
                </Touchable>
                <Touchable>
                    <LanguageItem text='eng' isActive={engOn} onPress={() => {
                        strings.setLanguage('eng');
                        setUzOn(false);
                        setRuOn(false);
                        setEngOn(true);
                        navigation.toggleDrawer();
                        navigate('Main', {});
                    }}/>
                </Touchable>
            </View>
            <View style={{
                alignItems: 'center',
            }}>
                <Touchable onPress={() => {
                    dispatch(userLogout());
                    navigate('Main', {});
                }}>
                    <View style={{
                        padding: 15,
                        borderRadius: 30,
                        backgroundColor: colors.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <AntDesign name='logout' size={20} style={{
                            color: colors.green,
                        }}/>
                    </View>
                </Touchable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        flex: 1,
        paddingBottom: 40,
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
    lanWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 40,
    },

});

export default connect(null)(DrawerContent);
