import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../context/Authcontext";
import { BsBookmarks } from "react-icons/bs";
import { BsBookmarksFill } from "react-icons/bs";
import axios from "axios";
import { useParams } from "react-router";

const OneBookItem = (props) => {
    const [book, setbook] = useState(null);
    var { bookID } = useParams();

    const [bookmark, setbookmark] = useState(false);
    const { addtoBookmarkFn, userInfo } = useContext(AuthContext);
    console.log("userInfo oneBook", userInfo);
    const bookmarkFn = () => {
        addtoBookmarkFn(book._id);
    };

    if (userInfo) {
        userInfo.bookmarks.map((userBookmarked) => {
            console.log("bookiD", userBookmarked._id);
            if (userBookmarked._id === bookID) {
                setbookmark(true);
            }

            return null;
        });
    }

    useEffect(() => {
        const bookInfoFn = async (e) => {
            try {
                const url = `http://localhost:5000/book/onebook?bookid=${bookID}`;
                var bookResponse = await axios.get(url, {
                    withCredentials: true,
                });

                setbook(bookResponse.data);
            } catch (error) {
                console.log(error);
            }
        };
        bookInfoFn();
    }, [bookID]);

    return (
        <div className="container-md ">
            {book && (
                <div className="one-book-page">
                    <div className="onebook-bookImage">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="onebookimg"
                        />
                    </div>
                    <div className="onebook-bookInfo">
                        <h2>{book.title}</h2>
                        <h4>
                            Author : <span>{book.author} </span>
                        </h4>
                        <h4>
                            Edition : <span> {book.edition}</span>
                        </h4>
                        <h4>
                            Publication : <span>{book.publication} </span>
                        </h4>
                        <p> Description : {book.description}</p>

                        <h4>
                            <span className="mrp">
                                MRP : Rs {book.mrpRate}{" "}
                            </span>{" "}
                            <span className="actualPrice">
                                Acutal Rate : Rs {book.priceRate}{" "}
                            </span>
                        </h4>
                        <div className="btnGroup">
                            <button
                                onClick={bookmarkFn}
                                className="bookmarkbtn">
                                {bookmark ? (
                                    <BsBookmarksFill />
                                ) : (
                                    <BsBookmarks />
                                )}
                            </button>
                            <button className="addtocart btn-block">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OneBookItem;
