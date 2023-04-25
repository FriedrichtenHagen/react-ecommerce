import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage.js";
import Category from "./pages/CategoryPage.js";
import ProductPage from "./pages/ProductPage.js";




const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/productpage/:productName" element={<ProductPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;