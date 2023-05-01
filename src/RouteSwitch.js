import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./pages/HomePage.js";
import Category from "./pages/CategoryPage.js";
import ProductPage from "./pages/ProductPage.js";
import ShoppingCart from "./pages/ShoppingCart.js";




const RouteSwitch = () => {
  const [cart, setCart] = useState([])

  function handleAddingItemToCart(selectedProduct){
    
    // check for duplicate
    const duplicatePosition = checkForObjectInArray(selectedProduct, cart)
    if(duplicatePosition!==false){
      // if duplicate add 1 to product counter
      
      console.log(selectedProduct.amount)
    } else{
      // set amount to 0
      selectedProduct.amount = 0
      // add item to cart
      setCart([...cart, selectedProduct])
    }
    


  }
  function checkForObjectInArray(object, array){
    for(let i=0; i<array.length; i++){
      if(array[i].name===object.name){
        return i
      }
    }
    return false
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
         <Route path="/shoppingcart" element={<ShoppingCart cart={cart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;