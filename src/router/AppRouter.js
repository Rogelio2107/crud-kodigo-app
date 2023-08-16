import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "../components";
import { AboutUs } from "../pages/AboutUs";
import { Autores } from "../pages/Autores";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/autores" element={<Autores />} />
      </Routes>
    </>
  );
};