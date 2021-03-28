import {createContext, useState} from 'react';


export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [token, setToken] = useState('');

    const signin = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
    };


    return (
        <AuthContext.Provider value={{token, signin, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}
