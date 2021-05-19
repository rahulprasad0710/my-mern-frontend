import React, { useState } from "react";

import axios from "axios";

axios.defaults.withCredentials = true;

const MyAddress = () => {
    const [addressName, setAddressName] = useState("");
    const [recieverName, setRecieverName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [ward, setWard] = useState("");
    const [tole, setTole] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            recieverName,
            phoneNumber,
            addressName,
            ward,
            tole,
            city,
            district,
        };
        console.log(addressData);

        try {
            const url = "http://localhost:5000/profile/myaddress";
            const response = await axios.post(url, addressData);
            console.log(response);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="edit-address-section">
            <form
                className="edit-address-form"
                onSubmit={handleSubmit}
                type="SUBMIT">
                <div className="address-group">
                    <label htmlFor="addressName">Receiver's Name</label>
                    <input
                        placeholder="Address"
                        onChange={(e) => setRecieverName(e.target.value)}
                        value={recieverName}
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="address-group">
                    <label htmlFor="addressName">Phone Number</label>
                    <input
                        placeholder="Address"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        className="form-control"
                        type="number"
                    />
                </div>
                <div className="address-group">
                    <label htmlFor="addressName">Address Details</label>
                    <textarea
                        rows="5"
                        cols="28"
                        placeholder="Address"
                        onChange={(e) => setAddressName(e.target.value)}
                        value={addressName}
                        className="form-textarea"
                        type="text"
                    />
                </div>

                <div className="address-group">
                    <label htmlFor="ward">Ward</label>
                    <input
                        type="number"
                        placeholder="Ward"
                        onChange={(e) => setWard(e.target.value)}
                        value={ward}
                        className="form-control"
                    />
                </div>
                <div className="address-group">
                    <label htmlFor="tole">tole</label>
                    <input
                        type="text"
                        placeholder="Tole"
                        onChange={(e) => setTole(e.target.value)}
                        value={tole}
                        className="form-control"
                    />
                </div>

                <div className="address-group">
                    <label htmlFor="city">City/Town</label>
                    <input
                        type="text"
                        placeholder="City Tole ..."
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        className="form-control"
                    />
                </div>
                <div className="address-group">
                    <label htmlFor="district">District</label>
                    <input
                        type="text"
                        placeholder="District"
                        onChange={(e) => setDistrict(e.target.value)}
                        value={district}
                        className="form-control"
                    />
                </div>

                <button
                    className="btn-block"
                    type="submit"
                    onClick={handleSubmit}>
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default MyAddress;
