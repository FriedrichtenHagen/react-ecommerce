import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Category from "./pages/category-page.js";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;