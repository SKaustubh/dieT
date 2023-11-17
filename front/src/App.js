import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";

import CardsSection from "./Components/CardsSection";
import Footerr from "./Components/Footerr";
import Login from "./Components/Login";

import Sign from "./Components/Sign";


function App() {
  return (
    <>






      <BrowserRouter>


        <Navbar />

        <Routes>
          <Route element={<CardsSection />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Sign />} path="/signup" />



        </Routes>
        <Footerr />

      </BrowserRouter>
    </>
  );
}

export default App;
