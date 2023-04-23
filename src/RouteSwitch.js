import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Category from "./pages/category-page.js";
import ProductPage from "./pages/ProductPage.js";




const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category" element={<Category />} />
        <Route path="/:productName" element={<ProductPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;