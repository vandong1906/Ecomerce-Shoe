import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import Cookies from 'js-cookie';
export interface IAuthContext {
    login: boolean;
    user: any;
    setUser: (user: any) => void;
    handleLogout: () => void;
}
const AuthenticationContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthenticationProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        // Cookies.remove('user');
        const storedUser = Cookies.get('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
        if (storedUser) {
            setLogin(true);
        }
    }, []);
    const authContextValue = {
        login: isLogin,
        user,
        setUser: (newUser: any) => {
            setUser(newUser);
            Cookies.set('user', JSON.stringify(newUser), { expires: 7 });
            setLogin(true);
        },
        handleLogout: () => {
            setLogin(false);
            Cookies.remove('user');
            setUser(null);
        },
    };

    return (
        <AuthenticationContext.Provider value={authContextValue}>
            {children}
        </AuthenticationContext.Provider>
    );
};

// Corrected the typo here from `useAuthenciacne` to `useAuthentication`
export const useAuthentication = (): IAuthContext => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuthentication must be used within an AuthenticationProvider');
    }
    return context;
};
