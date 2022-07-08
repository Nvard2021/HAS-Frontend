import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../src/pages/Login"
import Home from "../src/pages/Home";
import Restaurant from "../src/pages/Restaurant";

import Kitchen from "../src/pages/Kitchen";
import MusicHall from "../src/pages/MusicHall";
import Events from "../src/pages/Events";

import Bar from "./pages/pages/Bar";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/restaurant" element={<Restaurant />}></Route>
                <Route exact path="/bar" element={<Bar />}></Route>
                <Route exact path="/kitchen" element={<Kitchen />}></Route>
                <Route exact path="/musichall" element={<MusicHall />}></Route>
                <Route exact path="/events" element={<Events />}></Route;>
            </Routes>
        </BrowserRouter>
    );
}

console.log('xbhsj') ;
