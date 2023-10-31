import React, {useEffect} from 'react';
import {View, Text, StatusBar, PermissionsAndroid} from 'react-native';
import ImagesScreen from './src/screens/ImagesScreen';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <ImagesScreen />
    </>
  );
};

export default App;
