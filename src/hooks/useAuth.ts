import React, {useState, useEffect} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import {auth} from '../config/firebase';

export function useAuth() {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, () => {
            if (user){
                setUser(user);
            } else {
                setUser(undefined);
            }
        });

        return unsubscribe;
    },[]);

    return {
        user,
    };
}
