import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Restaurant from "../src/pages/Restaurant";
import Bar from "../src/pages/Bar";
import Kitchen from "../src/pages/Kitchen";
import MusicHall from "../src/pages/MusicHall";
import Events from "../src/pages/Events";
import ROUTES from "../src/constants/Routes";
import NotFound from "../src/pages/NotFound";
import ProtectedRoutes from "./constants/ProtectedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.Login} element={<Login />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path={ROUTES.Home} element={<Home />}></Route>
          <Route path={ROUTES.Restaurant} element={<Restaurant />}></Route>
          <Route path={ROUTES.Bar} element={<Bar />}></Route>
          <Route path={ROUTES.Kitchen} element={<Kitchen />}></Route>
          <Route path={ROUTES.MusicHall} element={<MusicHall />}></Route>
          <Route path={ROUTES.Events} element={<Events />}></Route>
          <Route path={ROUTES.NotFound} element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
