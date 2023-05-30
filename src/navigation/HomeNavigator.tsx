//@ts-nocheck
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DishList} from '../modules/DishList';

const Stack = createNativeStackNavigator();

const HomeNavigator = React.memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Meal Counts" component={DishList} />
    </Stack.Navigator>
  );
});

export default HomeNavigator;
