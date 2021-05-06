import "./main.css";

import React, { useEffect, useState } from "react";

import Bookitem from "../BookItem/Bookitem";
import axios from "axios";
import coverBook from "../../assets/images/cover.jpg";

axios.defaults.withCredentials = true;

const Main = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const getBooksItemFn = async (e) => {
            try {
                const url = "http://localhost:5000/home";
                var infoResponse = await axios.get(url, {
                    withCredentials: true,
                });
                console.log(infoResponse);
                setBooks(infoResponse.data.newbooks);
            } catch (error) {
                console.log(error);
            }
        };
        getBooksItemFn();
    }, []);

    return (
        <div className="main-page">
            <div className="image-container">
                <div className="image-info">
                    <p>
                        “It isn’t what the book costs. It’s what it will cost
                        you if you don’t read it.”{" "}
                    </p>
                    <span className="accNote qouteAuthor">― Jim Rohn </span>
                </div>
                <img className="coverBook" src={coverBook} alt="cover" />
            </div>

            <Bookitem books={books} />
        </div>
    );
};

export default Main;
