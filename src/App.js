import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AddBook from "./components/admin/AddBook";
import Bookmark from "./components/bookmark/Bookmark";
import Cart from "./components/cart/Cart";
import Layout from "./components/layout/Layout";
import Login from "./components/Auth/Login";
import Main from "./components/main/Main.jsx";
import OneBookItem from "./components/BookItem/OneBookItem.jsx";
import Profile from "./components/Profile/Profile";
import Register from "./components/Auth/Register";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/book/:bookID">
                        <OneBookItem />
                    </Route>

                    <Route path="/bookmark">
                        <Bookmark />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>

                    <Route path="/admin/addbook">
                        <AddBook />
                    </Route>

                    <Route path="/book/:id">
                        <OneBookItem />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
