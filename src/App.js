import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./components/Auth/Login";
import Main from "./components/main/Main.jsx";
import Profile from "./components/Auth/Profile";
import Register from "./components/Auth/Register";

function App() {
    return (
        <Router>
            <div className="App">
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
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
