import React, { useEffect } from "react";
import axios from "axios";
const Test = () => {
    useEffect(() => {
        const getMsg = async () => {
            try {
                const response = await axios.get("http://localhost:5000/hello");
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        getMsg();
    }, []);

    return <div>Hello from test</div>;
};

export default Test;
