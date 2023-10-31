import {moderateScale, verticalScale} from './metrics';

export const FONTS = {
  ButtonText: {
    fontFamily: 'Barlow-Medium',
    fontWeight: '500',
    fontSize: moderateScale(14),
    lineHeight: verticalScale(16.8),
    letterSpacing: 0.2,
  },
  SelectMultiple: {
    fontFamily: 'Barlow-Medium',
    fontWeight: '500',
    fontSize: moderateScale(16),
    lineHeight: verticalScale(22),
    letterSpacing: 0.2,
  },
  ActiveSelect: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: moderateScale(16),
    lineHeight: verticalScale(18.75),
    letterSpacing: 0.2,
  },
  SelectText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: moderateScale(16),
    lineHeight: verticalScale(18.75),
    letterSpacing: 0.2,
  },
  Header4: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: moderateScale(18),
    lineHeight: verticalScale(21.09),
  },
  MultipleTextNumber: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '600',
    fontSize: moderateScale(8),
    lineHeight: verticalScale(8),
    letterSpacing: -0.16,
  },
};
