import "./addbook.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddBook = () => {
    const [fileInput, setFileInput] = useState("");
    const [previewSource, setPreviewSource] = useState(null);
    const [values, setvalues] = useState({
        title: "",
        publication: "",
        quantityInStock: "",
        mrpRate: "",
        subject: "",
        level: "",
        author: "",
        edition: "",
        priceRate: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!previewSource) {
            toast.error("Image is not uploaded");
            return;
        }
        const checkEmptyFields = Object.values(values).some(
            (element) => element === ""
        );
        if (checkEmptyFields) {
            toast.error("All fields should be filleds ");
            return;
        } else {
            const res = await fetch("http://localhost:5000/admin/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ imgData: previewSource, values }),
            });

            console.log(res);
        }
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

    return (
        <div>
            <h2>Add a book</h2>
            <ToastContainer position="top-center" />
            <div className="forms">
                <form
                    className="book-form"
                    onSubmit={handleSubmit}
                    type="SUBMIT">
                    <div className="form-text">
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
                    </div>

                    <div className="form-image">
                        <div className="form-group">
                            <label>Image </label>
                            <input
                                type="file"
                                placeholder="Image"
                                onChange={handleChangeImg}
                                className="form-control"
                                value={fileInput}
                            />
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
                    </div>
                </form>
            </div>

            <input
                type="submit"
                value="Submit"
                className="input-btn"
                onClick={handleSubmit}
            />

            <div className="edit-btns">
                <button className="btn-danger">Delete</button>
                <button className="btn-warning">Edit</button>
            </div>
        </div>
    );
};

export default AddBook;
