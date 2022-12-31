import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthNavigation } from "./authNavigation";

const Drawer = createDrawerNavigator();

export const SideMenuNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
        headerShown: false}} >
            <Drawer.Screen name="cartScreen" options={{title: 'Cart'}} component={AuthNavigation} />
        </Drawer.Navigator>
    );
};
