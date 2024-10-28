import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';


const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        userName: '',
        profession: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <SignupContext.Provider value={{ signupData, setSignupData }}>
            <Outlet/>
        </SignupContext.Provider>
    );
};

export const useSignup = () => useContext(SignupContext);
