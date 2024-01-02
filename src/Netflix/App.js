import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function App() { 
    return (
        <div className="App">
            <Routes>
                <Route path="/" Component={LoginPage}></Route>    
                <Route path="/home" Component={Home}></Route>
                <Route path="/login" Component={SignupPage}></Route>
            </Routes>
        </div>

    );
}
export default App;