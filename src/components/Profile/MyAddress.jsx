import React, { useState } from "react";

import axios from "axios";

axios.defaults.withCredentials = true;

const MyAddress = () => {
    const [addressName, setAddressName] = useState("");
    const [ward, setWard] = useState("");
    const [tole, setTole] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addressData = { addressName, ward, tole, city, district };
        console.log(addressData);

        try {
            const url = "http://localhost:5000/account/profile";
            const response = await axios.post(url, addressData);
            console.log(response);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div>
            <h2>Address</h2>
            <form onSubmit={handleSubmit} type="SUBMIT">
                <label htmlFor="addressName">Address</label>
                <input
                    placeholder="Address"
                    onChange={(e) => setAddressName(e.target.value)}
                    value={addressName}
                    className="form-control"
                    type="text"
                />
                <label htmlFor="ward">Ward</label>
                <input
                    type="number"
                    placeholder="Ward"
                    onChange={(e) => setWard(e.target.value)}
                    value={ward}
                    className="form-control"
                />
                <label htmlFor="tole">tole</label>
                <input
                    type="text"
                    placeholder="Tole"
                    onChange={(e) => setTole(e.target.value)}
                    value={tole}
                    className="form-control"
                />
                <label htmlFor="city">City/Town</label>
                <input
                    type="text"
                    placeholder="City Tole ..."
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className="form-control"
                />
                <label htmlFor="district">District</label>
                <input
                    type="text"
                    placeholder="District"
                    onChange={(e) => setDistrict(e.target.value)}
                    value={district}
                    className="form-control"
                />

                <br />

                <button type="submit" onClick={handleSubmit}>
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default MyAddress;