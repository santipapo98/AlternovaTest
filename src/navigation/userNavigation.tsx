import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoreScreen from '../screens/storeScreen';
import DetailedProduct from '../screens/DetailedProduct';

export type RootStackParams = {
    StoreScreen: undefined,
    DetailedProduct: undefined,
}

export const UserNavigation = () => {

    const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator initialRouteName="StoreScreen">
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="DetailedProduct" component={DetailedProduct} />
    </Stack.Navigator>
  );
};
