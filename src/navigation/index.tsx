import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { SideMenuNavigation } from './sideMenuNavigation';
import { UserNavigation } from './userNavigation';

export default function RootNavigation() {
    const {user} = useAuth();

    return user ? <UserNavigation/> : <SideMenuNavigation/>;
}
