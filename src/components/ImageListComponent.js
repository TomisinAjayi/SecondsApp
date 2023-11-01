import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import {horizontalScale, verticalScale} from '../constants/metrics';
import {COLORS} from '../constants/colors';
import {FONTS} from '../constants/typography';

const ImageListComponent = ({
  disabled,
  checked,
  onPress,
  image,
  selected,
  number,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
      {checked && <View style={styles.selectionCircle} />}
      {selected && checked && (
        <View style={styles.selectedCircle}>
          <Text style={styles.selectionText}>{number}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(101),
    height: verticalScale(101),
    borderRadius: 4,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
  selectionCircle: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: horizontalScale(16),
    height: verticalScale(16),
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.neutral900,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: horizontalScale(16),
    height: verticalScale(16),
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.black,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionText: {
    ...FONTS.MultipleTextNumber,
    color: COLORS.white,
  },
});

export default ImageListComponent;
