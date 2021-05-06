import "./book.css";

import React, { useContext, useState } from "react";

import AuthContext from "../../context/Authcontext";
import { BsBookmarks } from "react-icons/bs";
import { BsBookmarksFill } from "react-icons/bs";

const Bookitem = ({ books }) => {
    const { addtoBookmarkFn } = useContext(AuthContext);
    const [wishlistOn, setwishlistOn] = useState(false);

    const handleClick = (e) => {
        console.log(e.currentTarget);
        let bookmarkItem = e.currentTarget.getAttribute("data-key");
        addtoBookmarkFn(bookmarkItem);
    };

    return (
        <div className="container-md new-books">
            <h2>WHAT's NEW</h2>
            <div className="all-books-item">
                {books &&
                    books.map((book) => (
                        <div key={book._id} className="book-Box">
                            <div className="book-image-box">
                                <div
                                    data-key={book._id}
                                    onClick={handleClick}
                                    value={false}
                                    className="bookmark-box">
                                    {wishlistOn ? (
                                        <BsBookmarksFill />
                                    ) : (
                                        <BsBookmarks />
                                    )}
                                </div>
                                <img src={book.image} alt={book.title} />
                            </div>
                            <div className="book-info-box">
                                <h3 className="book-title">{book.title}</h3>
                                <h4>
                                    <span className="mrp">
                                        MRP : Rs.{book.mrpRate}{" "}
                                    </span>
                                    <span className="actualPrice">
                                        Actual rate: Rs.{book.priceRate}{" "}
                                    </span>
                                </h4>
                                <button>View Details</button>
                            </div>
                        </div>
                    ))}
            </div>

            <h3 className="view-all">view all</h3>
        </div>
    );
};

export default Bookitem;
