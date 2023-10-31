import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONTS} from '../constants/typography';

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
    width: 16,
    height: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: COLORS.black,
  },
  radioText: {
    ...FONTS.SelectMultiple,
    color: COLORS.black,
  },
});

export default Radio;
