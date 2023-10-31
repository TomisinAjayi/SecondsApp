import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {FONTS} from '../constants/typography';
import {COLORS} from '../constants/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/metrics';
import icons from '../constants/icons';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={icons.cancel} style={styles.cancelButton} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: moderateScale(107),
    paddingLeft: horizontalScale(24),
    paddingVertical: verticalScale(14),
    alignItems: 'flex-end',
  },
  cancelButton: {
    width: horizontalScale(24),
    height: verticalScale(24),
  },
  text: {
    ...FONTS.Header4,
    color: COLORS.neutral700,
  },
});
export default Header;
