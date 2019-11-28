import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView} from 'react-native';
import Header from '../../components/Header';
import strings from '../../localization/strings';
import colors from '../../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TimelineItem from '../../components/TimelineItem';
import Uzcard from '../../constants/icons';
import Modal from '../../components/Modal';
import Payment from './Payment';
import Touchable from '../../components/Touchable';

const usageList = [
    {
        id: 1,
        price: 10000,
        income: true,
        title: 'hz',
        time: '10:10',
    },
    {
        id: 2,
        price: 10000,
        income: false,
        title: 'hz',
        time: '10:10',
    },
    {
        id: 3,
        price: 10000,
        income: true,
        title: 'hz',
        time: '10:10',
    },
    {
        id: 4,
        price: 10000,
        income: false,
        title: 'hz',
        time: '10:10',
    },

];


const Wallet = ({navigation}) => {
    let [paymentVisibility, setPaymentVisibility] = useState(false);

    let temp = paymentVisibility;
    return (
        <React.Fragment>
            <ScrollView style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.imageWrapper}>
                        <Image style={{
                            height: 120,
                            width: 120,
                        }} source={{
                            uri: 'https://pbs.twimg.com/profile_images/1168193672028069888/cxvQzRaC_400x400.jpg',
                        }}/>
                    </View>
                    <Text style={styles.name}>sdfasd af asdfasd</Text>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoLeft}>
                            <Text style={styles.infoTitle}>
                                {strings.inYourBalance}
                            </Text>
                            <Text style={styles.infoText}>
                                1230123 {strings.uzs}
                            </Text>
                        </View>
                        <View style={styles.infoMiddle}>
                            <Text style={styles.infoTitle}>
                                {strings.bonusBalance}
                            </Text>
                            <Text style={styles.infoText}>
                                50
                            </Text>
                        </View>
                        <Touchable onPress={() => {
                            setPaymentVisibility(true);
                        }}>
                            <View style={styles.infoRight}>
                                <Text style={[styles.infoTitle, {
                                    color: colors.white,
                                }]}>
                                    {strings.fillBalance}!
                                </Text>

                                <View style={styles.iconsPill}>
                                    <FontAwesome name='plus' size={20} color={colors.white}/>
                                    <FontAwesome name='cc-visa' size={20} color={colors.white}/>
                                    <FontAwesome name='cc-mastercard' size={20} color={colors.white}/>
                                    <FontAwesome name='paypal' size={20} color={colors.white}/>
                                </View>
                            </View>
                        </Touchable>

                    </View>
                </View>
                <View showsVerticalScrollIndicator={false}>
                    <View style={{
                        marginVertical: 20,
                        backgroundColor: colors.white,
                        paddingVertical: 20,
                        paddingTop: 10,
                    }}>
                        <View style={{
                            paddingLeft: 20,
                            paddingBottom: 10,
                        }}>
                            <Text style={{
                                fontSize: 18,
                                // color:colors.textGray
                            }}>To`lovlar monitoringi</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            // alignItems:'space-between'
                        }}>
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 15,
                            }}>
                                <Text style={{
                                    color: colors.textGray,
                                    fontSize: 13,
                                    paddingHorizontal: 10,
                                }}>Kirim</Text>
                                <Text style={{
                                    color: colors.green,
                                    fontSize: 16,
                                }}>+1000000 {strings.uzs}</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 15,
                                alignItems: 'flex-end',
                            }}>
                                <Text style={{
                                    color: colors.textGray,
                                    fontSize: 13,
                                    paddingLeft: 10,
                                }}>Chiqim</Text>
                                <Text style={{
                                    color: colors.red,
                                    fontSize: 16,
                                }}>-1000000 {strings.uzs}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.timeline}>
                        <Text style={styles.timelineTitle}>16 Noyabr, 2019</Text>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={usageList}
                            renderItem={({item}) => <TimelineItem item={item} navigation={navigation}/>}
                        />
                    </View>
                    <View style={styles.timeline}>
                        <Text style={styles.timelineTitle}>16 dhsdfg, 2019</Text>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={usageList}
                            renderItem={({item}) => <TimelineItem item={item} navigation={navigation}/>}
                        />
                    </View>
                    <View style={styles.timeline}>
                        <Text style={styles.timelineTitle}>16 dhsdfg, 2019</Text>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={usageList}
                            renderItem={({item}) => <TimelineItem item={item} navigation={navigation}/>}
                        />
                    </View>
                    <View style={styles.timeline}>
                        <Text style={styles.timelineTitle}>16 dhsdfg, 2019</Text>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={usageList}
                            renderItem={({item}) => <TimelineItem item={item} navigation={navigation}/>}
                        />
                    </View>
                    <View style={styles.timeline}>
                        <Text style={styles.timelineTitle}>16 dhsdfg, 2019</Text>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={usageList}
                            renderItem={({item}) => <TimelineItem item={item} navigation={navigation}/>}
                        />
                    </View>
                    <View style={styles.timeline}>
                        <Text style={styles.timelineTitle}>16 dhsdfg, 2019</Text>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={usageList}
                            renderItem={({item}) => <TimelineItem item={item} navigation={navigation}/>}
                        />
                    </View>
                </View>
            </ScrollView>
            {paymentVisibility && <Modal isOpen={paymentVisibility} navigation={navigation}>
                {/*<View style={{padding: 300, backgroundColor: colors.white}}>*/}
                {/*</View>*/}
                <Payment/>
            </Modal>}
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 60,
        flex: 1,
        backgroundColor: colors.lightBackground,
    },
    top: {
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.white,
        // elevation: 1,
        // borderRadius:15
    },
    imageWrapper: {
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    name: {
        paddingVertical: 10,
        fontSize: 21,
        fontWeight: 'bold',
    },
    infoWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    infoLeft: {
        flex: 1,
        padding: 20,
        paddingVertical: 10,
        marginHorizontal: 5,
        elevation: 3,
        backgroundColor: colors.white,

    },
    infoMiddle: {
        flex: 1,
        padding: 20,
        paddingVertical: 10,
        marginHorizontal: 5,
        elevation: 3,
        backgroundColor: colors.white,
    },
    infoRight: {
        flex: 1,
        padding: 20,
        paddingVertical: 10,
        marginHorizontal: 5,
        backgroundColor: colors.green,
        elevation: 3,
    },
    infoTitle: {
        fontSize: 13,
        color: colors.textGray,
    },
    infoText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconsPill: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
    },
    timeline: {
        marginTop: -20,
        // padding: 20,
        // backgroundColor:colors.white,
        // marginTop: 20,
    },
    timelineTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 20,
    },
});

export default Wallet;
