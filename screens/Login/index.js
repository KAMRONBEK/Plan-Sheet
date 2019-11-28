import React, {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import strings from '../../localization/strings';
import RoundedInput from '../../components/RoundedInput';
import RoundedButton from '../../components/RoundedButton';
import colors from '../../constants/colors';
// image
import {LOGIN_USER} from '../../graphql/requests';
import loginImage from '../../assets/image/login.png';
import {connect} from 'react-redux';
import {userLoaded} from '../../actions/userActions';

let Login = ({navigation, dispatch}) => {
    const {navigate} = navigation;

    let [username, setUsername] = useState('sherlock');
    let [password, setPassword] = useState('sherLOCK');

    const [loginUser, {loading, data, error}] = useLazyQuery(LOGIN_USER);

    if (data) {
        console.warn(data);
        dispatch(userLoaded(data.loginShop));
        navigate('Main', {});
    }
    return (
        loading ? (
            <View>
                <Text>loading...</Text>
            </View>) : (
            <React.Fragment>
                <ScrollView>
                    <View
                        style={[
                            styles.container,
                            {
                                backgroundColor: 'white',
                            },
                        ]}>
                        <View style={styles.top}>
                            <Image
                                source={loginImage}
                                style={{
                                    resizeMode: 'contain',
                                }}
                            />
                            <Text
                                style={[
                                    styles.title,
                                    {
                                        color: colors.green,
                                    },
                                ]}>
                                {strings.login}
                            </Text>
                        </View>
                        <View>
                            <Text style={{
                                textAlign: 'center',
                                color: colors.red,
                            }}>
                                {error && error.message}
                            </Text>
                        </View>
                        <View>
                            <RoundedInput title={strings.username} getInput={setUsername}/>
                            <RoundedInput title={strings.password} getInput={setPassword} isPassword/>
                        </View>
                        <View style={styles.bottom}>
                            <RoundedButton
                                text={strings.singIn}
                                onPress={() => {
                                    // console.warn(username);
                                    // console.warn(password);
                                    loginUser({
                                        variables: {
                                            username: username,
                                            password: password,
                                        },
                                    });

                                    // console.warn(username, password);
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </React.Fragment>
        ));
};

const styles = StyleSheet.create({
    container: {
        padding: 80,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    top: {
        alignItems: 'center',
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    middle: {
        flex: 1,
    },
    bottom: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 50,
    },
});

export default connect(null)(Login);
