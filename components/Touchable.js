import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

let Touchable = ({children, ...rest}) => {
  let Body = Platform.select({
    android: () => (
      <TouchableNativeFeedback {...rest}>{children}</TouchableNativeFeedback>
    ),
    ios: () => {
      return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
    },
  });
  return <Body />;
};

export default Touchable;
