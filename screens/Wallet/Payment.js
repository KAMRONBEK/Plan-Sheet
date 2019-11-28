import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import strings from '../../localization/strings';
import colors from '../../constants/colors';
import CustomTextInput from '../../components/CustomTextInput';
import DateInput from '../../components/DateInput';

const Payment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{strings.fillBalance}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                // alignItems: 'flex-end',
                justifyContent: 'space-between',
            }}>
                <CustomTextInput
                    title={strings.enterCardNumber}
                    constants={strings.uzs}
                    // numOfInput={10}
                />
                <DateInput title={strings.expireDate}/>
            </View>
            <View style={{
                marginTop: 20,
            }}>
                <CustomTextInput
                    title={strings.enterCardNumber}
                    constants={strings.uzs}
                    // numOfInput={10}
                />
            </View>
            <View style={styles.bottom}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{strings.sendConfirmationNumber}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 500,
        borderRadius: 4,
        padding: 30,
        backgroundColor: colors.white,
    },
    titleWrapper: {
        padding: 5,
        borderRadius: 3,
        marginBottom: 10,
    },
    title: {
        fontSize: 19,
        color: colors.textGray,
    },
    bottom: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    button: {

        padding: 20,
        backgroundColor: colors.green,
        borderRadius: 4,
    },
    buttonText: {
        color: colors.white,
    },
});

export default Payment;
