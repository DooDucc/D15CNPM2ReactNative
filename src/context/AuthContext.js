import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from 'react';
import React from 'react';

export const Context = createContext();

const AuthContext = ({ children }) => {
    const [userInfo, setUserInfo] = React.useState({});

    const login = async (email, password) => {
        if (email !== '' && password !== '') {
            AsyncStorage.setItem('email', JSON.stringify(email));
            AsyncStorage.setItem('password', JSON.stringify(password));
            setUserInfo({ email, password });
        }
    };
    const value = { userInfo, login };
    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AuthContext;
