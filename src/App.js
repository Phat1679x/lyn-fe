import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Common
import HeadSlick from "./components/head/HeadSlick";
import Header from "./components/head/Header";

import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-[#fafafa]">
        <HeadSlick />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
