import React, { useEffect, useState } from "react";

import EditAddress from "./EditAddress";
import EditInfo from "./EditInfo";
import axios from "axios";

axios.defaults.withCredentials = true;

const MyAddress = () => {
    const [infoData, setinfoData] = useState(null);
    const [editInfoBlock, seteditInfoBlock] = useState(false);
    useEffect(() => {
        const userInfoFn = async () => {
            try {
                const url = "http://localhost:5000/profile/myaddress";
                const infoResponse = await axios.get(url, {
                    withCredentials: true,
                });
                console.log(infoResponse);
                setinfoData(infoResponse.data.addresses);
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
        <div className="container-md">
            <h2>My Addresses</h2>
            <div className="all-address">
                {infoData ? (
                    infoData.map((e) => (
                        <div
                            className={
                                editInfoBlock
                                    ? "info-box opactiy-info"
                                    : "info-box "
                            }>
                            <div className="info-group">
                                <h4>Address Name</h4>
                                <h3>{e.addressName}</h3>
                            </div>
                            <div className="info-group">
                                <h4>Tole</h4>
                                <h3>{e.tole}</h3>
                            </div>
                            <div className="info-group">
                                <h4>Ward</h4>
                                <h3>{e.ward}</h3>
                            </div>
                            <div className="info-group">
                                <h4>City/Town</h4>
                                <h3>{e.city}</h3>
                            </div>

                            <div className="info-group">
                                <h4>District</h4>
                                <h3>{e.district}</h3>
                            </div>
                            <button
                                onClick={editInfoFn}
                                className="btn btn-save">
                                Edit Address
                            </button>
                        </div>
                    ))
                ) : (
                    <p> Loading.... </p>
                )}
            </div>
            {editInfoBlock ? <EditAddress /> : ""}
        </div>
    );
};

export default MyAddress;
