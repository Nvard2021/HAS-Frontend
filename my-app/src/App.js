import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Restaurant from "../src/pages/Restaurant";
import Bar from "./pages/pages/Bar";
import Kitchen from "../src/pages/Kitchen";
import MusicHall from "../src/pages/MusicHall";
import Events from "../src/pages/Events";
import ROUTES from "../src/constants/Routes";

// const withPrivateRoute = ({ user, redirectPath = '/home' }) => {
//   if (!user) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return <Login />;
// };
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.Home} element={<Home />}></Route>
        <Route path={ROUTES.LOGIN} element={<Login />}></Route>
        <Route path={ROUTES.Restaurant} element={<Restaurant />}></Route>
        <Route path={ROUTES.Bar} element={<Bar />}></Route>
        <Route path={ROUTES.Kitchen} element={<Kitchen />}></Route>
        <Route path={ROUTES.MusicHall} element={<MusicHall />}></Route>
        <Route path={ROUTES.Events} element={<Events />}></Route>
        <Route path={ROUTES.NotFound} element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}



