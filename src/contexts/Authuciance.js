import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import { logoutGoogle } from '@config/auth_google';
const AuthenticationContext = createContext(undefined);
export const AuthenticationProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = Cookies.get('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
        if (storedUser) {
            setLogin(true);
        }
    }, []);
    const authContextValue = {
        login: isLogin,
        user,
        setUser: (newUser) => {
            if (newUser?.type === 'google') {
                newUser.role = 'admin';
            }
            else {
                newUser.role = 'user';
            }
            setUser(newUser);
            Cookies.set('user', JSON.stringify(newUser), { expires: 7 });
            setLogin(true);
        },
        handleLogout: () => {
            if (user?.type === 'google') {
                logoutGoogle();
            }
            setLogin(false);
            Cookies.remove('user');
            setUser(null);
        },
    };
    return (_jsx(AuthenticationContext.Provider, { value: authContextValue, children: children }));
};
export const useAuthentication = () => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuthentication must be used within an AuthenticationProvider');
    }
    return context;
};
