import React, { useEffect } from "react";

import axios from "axios";

axios.defaults.withCredentials = true;
const Bookmark = () => {
    useEffect(() => {
        const checkUserLoggedInFn = async (e) => {
            try {
                const url = "http://localhost:5000/test";
                var bookmarkResponse = await axios.get(url, {
                    withCredentials: true,
                });
                console.log("bookmarkResponse", bookmarkResponse);
            } catch (error) {
                console.log(error);
            }
        };
        checkUserLoggedInFn();
    }, []);

    return <div className="container-md">hello Bok</div>;
};

export default Bookmark;
