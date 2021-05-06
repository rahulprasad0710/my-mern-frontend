import React, { useEffect, useState } from "react";

import EditInfo from "./EditInfo";
import axios from "axios";

axios.defaults.withCredentials = true;

const Register = () => {
    const [infoData, setinfoData] = useState(null);
    const [editInfoBlock, seteditInfoBlock] = useState(false);
    useEffect(() => {
        const userInfoFn = async (e) => {
            try {
                const url = "http://localhost:5000/profile/myinfo";
                const infoResponse = await axios.get(url, {
                    withCredentials: true,
                });
                console.log(infoResponse);
                setinfoData(infoResponse.data);
            } catch (error) {
                console.log(error);
            }
        };
        userInfoFn();
    }, [editInfoBlock]);

    const editInfoFn = () => {
        seteditInfoBlock(true);
    };

    return (
        <div>
            <h2>My Info</h2>

            <div className="info-box-both">
                {infoData ? (
                    <div
                        className={
                            editInfoBlock
                                ? "info-box opactiy-info"
                                : "info-box "
                        }>
                        <div className="info-group">
                            <h4>First Name</h4>
                            <h3>{infoData.firstName}</h3>
                        </div>
                        <div className="info-group">
                            <h4>Last Name</h4>
                            <h3>{infoData.lastName}</h3>
                        </div>
                        <div className="info-group">
                            <h4>Mobile Number</h4>
                            <h3>{infoData.mobileNo}</h3>
                        </div>
                        <div className="info-group">
                            <h4>Class / Level</h4>
                            <h3>{infoData.level}</h3>
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
                        <button onClick={editInfoFn} className="btn btn-save">
                            Edit info
                        </button>
                    </div>
                ) : (
                    <p> Loading.... </p>
                )}
                {editInfoBlock ? (
                    <EditInfo
                        editBlock={seteditInfoBlock}
                        infoData={infoData}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Register;
