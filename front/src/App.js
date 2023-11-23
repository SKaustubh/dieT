import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import CardsSection from "./Components/CardsSection";
import Footerr from "./Components/Footerr";
import Login from "./Components/Login";
import UserAuth from "./UserAuth";
import Sign from "./Components/Sign";
import Calorie from "./Components/Calorie";
import NotFound from "./Components/NotFound.js";
import { AppProvider } from "./AppContext.js";

function App() {
  return (
    <>

      <div>

        <Toaster position="top right" />





        <BrowserRouter>
          <AppProvider>

            <Navbar />

            <Routes>
              <Route element={<CardsSection />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<Sign />} path="/signup" />
              <Route element={<UserAuth><Calorie /></UserAuth>} path="/Calorie" />
              <Route element={<NotFound />} path="*" />


            </Routes>
            <Footerr />
          </AppProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
