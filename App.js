import React from 'react';
import {StatusBar} from 'react-native';
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
