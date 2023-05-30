//@ts-nocheck
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StoreProvider from './StoreProvider';
import HomeNavigator from './navigation/HomeNavigator';

const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
