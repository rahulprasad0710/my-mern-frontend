import Test from "./components/Test";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/Auth/Login";
function App() {
    return (
        <Router>
            <div className="App">
                <Layout>
                    <Switch>
                        <Route exact path="/"></Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
