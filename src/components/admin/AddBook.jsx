import "./addbook.css";

import React, { useContext, useState } from "react";

import { FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AddBook = () => {
    const [fileInput, setFileInput] = useState("");
    const [previewSource, setPreviewSource] = useState(null);
    const [values, setvalues] = useState({
        name: "",
        performers: "",
        venue: "",
        description: "",
        date: "",
        time: "",
        address: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleChangeImg = (e) => {
        const imageFile = e.target.files[0];
        console.log(imageFile);
        previewFile(imageFile);
    };

    const previewFile = (imageFile) => {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };
    const handleSubmitImage = (e) => {
        e.preventDefault();
        console.log("working 1");
        if (!previewSource) return;
        console.log("working");
        uploadImageFn(previewSource);
    };
    const uploadImageFn = async (base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            const imgResponse = await fetch(
                "http://localhost:5000/admin/upload",
                {
                    method: "POST",
                    body: JSON.stringify({ imgData: base64EncodedImage }),
                    headers: { "Content-Type": "application/json" },
                }
            );
            console.log(imgResponse);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Add a book</h2>
            <div className="forms">
                <form
                    className="book-form"
                    onSubmit={handleSubmit}
                    type="SUBMIT">
                    <div className="form-group">
                        <label htmlFor="email">Title</label>
                        <input
                            onChange={handleInputChange}
                            id="title"
                            name="title"
                            value={values.title}
                            type="text"
                            placeholder="Name of the book"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="publication">Publication</label>
                        <input
                            onChange={handleInputChange}
                            name="publication"
                            id="publication"
                            value={values.publication}
                            placeholder="publication"
                            className="form-control"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Level/Class</label>
                        <input
                            onChange={handleInputChange}
                            name="level"
                            id="level"
                            value={values.level}
                            type="text"
                            placeholder="Level or class"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordAgain">Subject</label>
                        <input
                            onChange={handleInputChange}
                            name="subject"
                            id="subject"
                            value={values.subject}
                            type="text"
                            placeholder="Subject"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordAgain">Author</label>
                        <input
                            onChange={handleInputChange}
                            name="author"
                            id="author"
                            value={values.author}
                            type="text"
                            placeholder="Writter"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordAgain">Edition</label>
                        <input
                            onChange={handleInputChange}
                            name="edition"
                            id="edition"
                            value={values.edition}
                            type="text"
                            placeholder="Edition"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="passwordAgain">MRP Price</label>
                        <input
                            onChange={handleInputChange}
                            name="mrpRate"
                            id="mrpRate"
                            value={values.mrpRate}
                            type="number"
                            placeholder="MRP Price"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordAgain">Actual Price</label>
                        <input
                            onChange={handleInputChange}
                            id="priceRate"
                            name="priceRate"
                            value={values.priceRate}
                            type="number"
                            placeholder="Actual Price"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordAgain">Quantity</label>
                        <input
                            onChange={handleInputChange}
                            id="quantityInStock"
                            name="quantityInStock"
                            value={values.quantityInStock}
                            type="number"
                            placeholder="Quantity in stock"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            onChange={handleInputChange}
                            value={values.description}
                            name="description"
                            id="description"
                            cols="39"
                            placeholder=" About the book"
                            rows="10"
                        />{" "}
                    </div>
                </form>

                <form className="image-form" onSubmit={handleSubmitImage}>
                    <div className="form-group">
                        <label htmlFor="passwordAgain">Image</label>
                        <input
                            type="file"
                            placeholder="Image"
                            onChange={handleChangeImg}
                            className="form-control"
                            value={fileInput}
                        />
                        <button onSubmit={handleSubmitImage} type="submit">
                            Upload
                        </button>
                    </div>

                    <div className="form-group">
                        {previewSource && (
                            <img
                                src={previewSource}
                                alt="book"
                                style={{ height: "380px", width: "300px" }}
                            />
                        )}
                    </div>
                </form>
            </div>

            <input
                type="submit"
                value="Submit"
                className="input-btn"
                onClick={handleSubmit}></input>
        </div>
    );
};

export default AddBook;
