import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </div>
    );
};

export default App;
