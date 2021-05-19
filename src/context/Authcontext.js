import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

axios.defaults.withCredentials = true;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [error, seterror] = useState(null);
    const [userInfo, setuserInfo] = useState(null);

    const checkUserLoggedInFn = async (e) => {
        try {
            const url = "http://localhost:5000/auth";
            var infoResponse = await axios.get(url, {
                withCredentials: true,
            });
            console.log(infoResponse);
            setuserInfo(infoResponse.data.existingUserInfo);
            setuser(infoResponse.data.existingUserInfo._id);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        checkUserLoggedInFn();
    }, [user]);

    const registerFn = async (values) => {
        try {
            console.log("auth", values);
            const url = "http://localhost:5000/account/register";
            const response = await axios.post(url, values);
            return response;
        } catch (error) {
            console.log("error", error);
            seterror(error);
        }
    };
    const loginFn = async (loginData) => {
        try {
            const url = "http://localhost:5000/account/login";
            const response = await axios.post(url, loginData);
            return response;
        } catch (error) {
            return error.response;
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
    //Frontend bookID = 60916a0371195f29c8657a17
    const addtoBookmarkFn = async (bookID) => {
        console.log(bookID);
        const book = bookID;
        try {
            const url = "http://localhost:5000/profile/bookmark";
            const response = await axios.post(url, { book });
            console.log(response);
        } catch (error) {
            console.log("error", error);
            seterror(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                error,
                userInfo,
                registerFn,
                loginFn,
                logoutFn,
                addtoBookmarkFn,
                checkUserLoggedInFn,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
