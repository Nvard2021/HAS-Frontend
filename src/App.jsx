import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

import Kitchen from "./pages/Kitchen";
import MusicHall from "./pages/MusicHall";
import Events from "./pages/Events";

import Bar from "./pages/pages/Bar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/restaurant" element={<Restaurant />} />
        <Route exact path="/bar" element={<Bar />} />
        <Route exact path="/kitchen" element={<Kitchen />} />
        <Route exact path="/musichall" element={<MusicHall />} />
        <Route exact path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

console.log("xbhsj");
