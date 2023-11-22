import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";

import CardsSection from "./Components/CardsSection";
import Footerr from "./Components/Footerr";
import Login from "./Components/Login";

import Sign from "./Components/Sign";
import Calorie from "./Components/Calorie";


function App() {
  return (
    <>






      <BrowserRouter>


        <Navbar />

        <Routes>
          <Route element={<CardsSection />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Sign />} path="/signup" />
          <Route element={<Calorie />} path="/Calorie" />



        </Routes>
        <Footerr />

      </BrowserRouter>
    </>
  );
}

export default App;
