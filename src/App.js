import React, {useState} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BlogOverview from "./pages/BlogOverview";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navbar isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login toggleAuth={toggleIsAuthenticated}/>

                </Route>

                <Route exact path="/blogoverview">
                    { isAuthenticated ? <BlogOverview/> : <Redirect to="/login"/> }

                </Route>
                <Route exact path="/blogpost/:blogid">
                    { isAuthenticated ? <BlogPost/> : <Redirect to="/login"/> }
                </Route>
                  <Route exact path="/blogpost">
                   { isAuthenticated ? <BlogOverview/> : <Redirect to="/"/> }
                </Route>
            </Switch>
        </>
    );
}

export default App;
