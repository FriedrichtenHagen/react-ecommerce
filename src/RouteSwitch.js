import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./pages/HomePage.js";
import Category from "./pages/CategoryPage.js";
import ProductPage from "./pages/ProductPage.js";




const RouteSwitch = () => {
  const [cart, setCart] = useState([])

  function handleAddingItemToCart(selectedProduct){
    // add item to cart
    setCart([...cart, selectedProduct])
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage cart={cart}/>} />
        <Route path="/category" element={<Category cart={cart}/>} />
        <Route path="/productpage/:productName" element={<ProductPage 
          cart={cart} 
          handleAddingItemToCart={handleAddingItemToCart} 
        />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;