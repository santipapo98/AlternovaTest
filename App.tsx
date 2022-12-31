import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation';

function App () {
  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
};

export default App;