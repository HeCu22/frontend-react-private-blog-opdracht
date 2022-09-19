import React, { useState } from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BlogOverview from "./pages/BlogOverview";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
//  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>

            </Route>
            <Route exact path="/blogoverview">
                <BlogOverview/>
            </Route>
            <Route exact path="/blogpost/:blogid">
                <BlogPost/>
            </Route>
        </Switch>
    </>
  );
}

export default App;
