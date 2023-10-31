// SplashScreen.js
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors';
import {horizontalScale, verticalScale} from '../constants/metrics';
import {FONTS} from '../constants/typography';

const Button = ({onPress, text, isButtonDisabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isButtonDisabled}
      style={[
        isButtonDisabled === true ? styles.container : styles.containerDisabled,
      ]}>
      <Text
        style={[isButtonDisabled === true ? styles.text : styles.textDisabled]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutral300,
    width: horizontalScale(102),
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    borderRadius: 4,
    gap: 10,
  },
  containerDisabled: {
    backgroundColor: COLORS.black,
    width: horizontalScale(102),
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    borderRadius: 4,
    gap: 10,
  },
  text: {
    ...FONTS.ButtonText,
    color: COLORS.neutral600,
    textAlign: 'center',
  },
  textDisabled: {
    ...FONTS.ButtonText,
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default Button;
