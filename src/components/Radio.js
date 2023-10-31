import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONTS} from '../constants/typography';
import {horizontalScale, verticalScale} from '../constants/metrics';

const Radio = ({label, checked, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.unchecked}>
        {checked && <View style={styles.checked} />}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  unchecked: {
    width: horizontalScale(16),
    height: verticalScale(16),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: horizontalScale(10),
    height: verticalScale(10),
    borderRadius: 6,
    backgroundColor: COLORS.black,
  },
  radioText: {
    ...FONTS.SelectMultiple,
    color: COLORS.black,
  },
});

export default Radio;
