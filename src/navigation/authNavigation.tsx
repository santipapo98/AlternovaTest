import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StoreScreen from '../screens/storeScreen';
import DetailedProduct from '../screens/DetailedProduct';

export type RootStackParams = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    StoreScreen: undefined,
    DetailedProduct: undefined,
}

export const AuthNavigation = () => {

    const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="DetailedProduct" component={DetailedProduct} />
    </Stack.Navigator>
  );
};
