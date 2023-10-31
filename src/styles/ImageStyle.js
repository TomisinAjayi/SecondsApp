import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../constants/metrics';
import {FONTS} from '../constants/typography';
import {COLORS} from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: horizontalScale(24),
  },
  filterContainer: {
    paddingHorizontal: horizontalScale(4),
    marginBottom: verticalScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    ...FONTS.SelectText,
    color: COLORS.neutral700,
  },
  selectedText: {
    ...FONTS.ActiveSelect,
    color: COLORS.black,
  },
  image: {
    width: horizontalScale(101),
    height: verticalScale(101),
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imagesContainer: {
    backgroundColor: COLORS.gray,
  },
  selectedImagesContainer: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  selectedImageNew: {
    width: horizontalScale(56),
    height: verticalScale(56),
    borderRadius: 2.218,
  },
  cancelButton: {
    width: horizontalScale(16),
    height: verticalScale(16),
  },
  cancelButtonContainer: {
    position: 'absolute',
    top: -6,
    right: -6,
    zIndex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: COLORS.black,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.black,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(11),
    paddingBottom: verticalScale(19),
  },
});

export {styles};
