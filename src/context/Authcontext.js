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
                const url = "http://localhost:5000/auth";
                var infoResponse = await axios.get(url, {
                    withCredentials: true,
                });
                console.log(infoResponse);
                setuser(infoResponse.data.existingUserInfo._id);
            } catch (error) {
                console.log(error);
            }
        };
        checkUserLoggedInFn();
    }, []);

    const registerFn = async (values) => {
        try {
            console.log("auth", values);
            const url = "http://localhost:5000/account/register";
            const response = await axios.post(url, values);
            console.log("response", response);
            const daata = await response.json();
            console.log("daata", daata);
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

    const addtoBookmarkFn = (bookmarkItem) => {
        console.log(bookmarkItem);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                error,
                registerFn,
                loginFn,
                logoutFn,
                addtoBookmarkFn,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
