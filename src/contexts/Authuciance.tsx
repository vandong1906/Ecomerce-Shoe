import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import Cookies from 'js-cookie';
import { logoutGoogle } from '@config/auth_google';

interface Itype {
    type: 'google' | 'facebook' | 'email';
}
export interface IAuthContext {
    login: boolean;
    user: user | null;
    setUser: (user: any) => void;
    handleLogout: () => void;
    
}
interface user {
    user:string,
    type:string
}
const AuthenticationContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthenticationProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState<user | null>(null);
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
        setUser: (newUser: user) => {
            setUser(newUser);
            Cookies.set('user', JSON.stringify(newUser), { expires: 7 });
            setLogin(true);
            console.log(newUser);
        },
        handleLogout: () => {
            if(user?.type === 'google'){
                logoutGoogle();
            }
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

export const useAuthentication = (): IAuthContext => {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('useAuthentication must be used within an AuthenticationProvider');
    }
    return context;
};
