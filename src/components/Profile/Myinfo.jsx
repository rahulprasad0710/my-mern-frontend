import React, { useEffect, useState } from "react";

import axios from "axios";

axios.defaults.withCredentials = true;
const Register = () => {
    const [infoData, setinfoData] = useState(null);

    useEffect(() => {
        const userInfoFn = async (e) => {
            try {
                const url = "http://localhost:5000/profile/myinfo";
                var infoResponse = await axios.get(url, {
                    withCredentials: true,
                });
                console.log(infoResponse);
                setinfoData(infoResponse.data);
            } catch (error) {
                console.log(error);
            }
        };
        userInfoFn();
    }, []);

    return (
        <div>
            <h2>My Info</h2>

            {infoData ? (
                <div className="info-box">
                    <div className="info-group">
                        <h4>First Name</h4>
                        <h3>Rahul</h3>
                    </div>
                    <div className="info-group">
                        <h4>Last Name</h4>
                        <h3>Prasad</h3>
                    </div>
                    <div className="info-group">
                        <h4>Mobile Number</h4>
                        <h3>{infoData.mobileNo}</h3>
                    </div>
                    <div className="info-group">
                        <h4>Gender</h4>
                        <h3>Male</h3>
                    </div>

                    <div className="info-group">
                        <h4>Password</h4>
                        <h3>******</h3>
                    </div>
                    <div className="info-group">
                        <h4>Email Id</h4>
                        <h3>{infoData.regEmail}</h3>
                    </div>

                    <button className="btn btn-password">
                        Change Password
                    </button>
                    <button className="btn btn-save">Save Changes</button>
                </div>
            ) : (
                <p> Loading.... </p>
            )}
        </div>
    );
};

export default Register;
