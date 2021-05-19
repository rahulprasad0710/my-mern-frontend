import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { AiOutlinePlus } from "react-icons/ai";
import AuthContext from "../../context/Authcontext";
import EditAddress from "./EditAddress";
import axios from "axios";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;

const MyAddress = () => {
    const { user } = useContext(AuthContext);
    const history = useHistory();
    const [infoData, setinfoData] = useState(null);
    const [editInfoBlock, seteditInfoBlock] = useState(false);
    useEffect(() => {
        if (!user) {
            history.push("/profile");
            return;
        } else {
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
        }
    }, [editInfoBlock, history, user]);

    const editInfoFn = () => {
        if (infoData) {
            if (infoData.length > 1) {
                toast.warn("More than 2 address cannot be saved.");
            } else {
                seteditInfoBlock(true);
            }
        }
    };

    return (
        <div className="address-section">
            <ToastContainer position="top-center" />
            <h2>My Addresses</h2>
            <div className="all-address">
                {infoData ? (
                    infoData.map((e) => (
                        <div
                            key={e._id}
                            className={
                                editInfoBlock
                                    ? "info-box opactiy-info"
                                    : "info-box "
                            }>
                            <div className="info-group">
                                <h4>Address Details</h4>
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
                            <div className="info-group">
                                <h4>Phone Number</h4>
                                <h3>9819828300</h3>
                            </div>
                            <button className="btn btn-save">
                                Delete Address
                            </button>
                            <button className="btn-block">Edit Address</button>
                        </div>
                    ))
                ) : (
                    <div className="no-address-msg">
                        {" "}
                        <h3>No address Added</h3>{" "}
                    </div>
                )}
            </div>

            <div className="add-address-section">
                <div className="add-edit-address">
                    <div onClick={editInfoFn} className="add-address">
                        <div>
                            <div>
                                <div className="plus-icon">
                                    <AiOutlinePlus />
                                </div>
                                <h4>Add New Address</h4>
                            </div>
                        </div>
                    </div>
                    <div className="edit-address">
                        {editInfoBlock ? <EditAddress /> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddress;
