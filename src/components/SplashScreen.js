// SplashScreen.js
import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { verticalScale } from '../constants/metrics';
import { COLORS } from '../constants/colors';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Images');
    }, 1000);
    // Hide the splash screen after a delay of 4 seconds
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.splashText}>SecondsApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: COLORS.black,
  },
});

export default SplashScreen;
