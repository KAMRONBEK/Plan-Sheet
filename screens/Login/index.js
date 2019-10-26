import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import strings from '../../localization/strings';
import RoundedInput from '../../components/RoundedInput';
import RoundedButton from '../../components/RoundedButton';
import colors from '../../constants/colors';
// image
import loginImage from '../../assets/image/login.png';

let Login = ({navigation}) => {
  const {navigate} = navigation;
  return (
    <React.Fragment>
      <View style={styles.container}>
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
        <View style={styles.middle}>
          <RoundedInput title={strings.username} />
          <RoundedInput title={strings.password} isPassword />
        </View>
        <View style={styles.bottom}>
          <RoundedButton
            text={strings.singIn}
            onPress={() => {
              navigate('Main', {});
            }}
          />
        </View>
      </View>
    </React.Fragment>
  );
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
    marginHorizontal: 10,
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Login;
