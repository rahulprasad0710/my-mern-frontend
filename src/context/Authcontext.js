import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

axios.defaults.withCredentials = true;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [error, seterror] = useState(null);

    useEffect(() => {
        const checkUserLoggedInFn = async (e) => {
            try {
                const url = "http://localhost:5000/profile/myinfo";
                var infoResponse = await axios.get(url, {
                    withCredentials: true,
                });
                console.log(infoResponse);
                setuser(infoResponse.data._id);
            } catch (error) {
                console.log(error);
            }
        };
        checkUserLoggedInFn();
    }, []);

    const registerFn = async ({ email, password, mobileNo }) => {
        try {
            const url = "http://localhost:5000/account/register";
            const response = await axios.post(url, {
                email,
                password,
                mobileNo,
            });
            console.log(response);
        } catch (error) {
            console.log("error", error);
            seterror(error);
        }
    };
    const loginFn = async (loginData) => {
        try {
            const url = "http://localhost:5000/account/login";
            const response = await axios.post(url, loginData);
            console.log(response);
        } catch (error) {
            console.log("error", error);
            seterror(error);
        }
    };
    const logoutFn = async () => {
        try {
            const url = "http://localhost:5000/account/logout";
            const response = await axios.get(url);
            console.log(response);
            setuser(null);
        } catch (error) {
            console.log("error", error);
            seterror(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, error, registerFn, loginFn, logoutFn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
