import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./pages/HomePage.js";
import Category from "./pages/CategoryPage.js";
import ProductPage from "./pages/ProductPage.js";
import ShoppingCart from "./pages/ShoppingCart.js";

/*
to do:

- add conditionally rendered "go add products to cart"-message in the shopping cart if there are zero products added
- style shop for desktop view
  - add hover effects
- add some kind of search functionality
- all links on home page should lead to the product page
- add size choosing on product page (add key to objects)
- add voucher component with drop down arrow
- add a recommendation section

*/


const RouteSwitch = () => {
  const [cart, setCart] = useState([])

  function handleAddingItemToCart(selectedProduct){
    // check for duplicate
    const duplicatePosition = checkForObjectInArray(selectedProduct, cart)
    if(duplicatePosition!==false){
      // if duplicate add 1 to product counter
      let addedCart = cart.slice()
      addedCart[duplicatePosition].amount++
      setCart(addedCart)
      console.log(cart)
    } else{
      // set amount to 0
      selectedProduct.amount = 1
      // add item to cart
      setCart([...cart, selectedProduct])
    }
    
  }
  function handleRemovingItemFromCart(selectedProduct){
    
    console.log(selectedProduct)
    // find product position in array
    const cartPosition = checkForObjectInArray(selectedProduct, cart)

    // check if product amount is one
    if(cart[cartPosition].amount===1){
      // remove item from cart
      let removedCart = cart.slice()
      removedCart.splice(cartPosition, 1)
      setCart(removedCart)

    } else{
      // remove 1 item from product amount
      let deletedCart = cart.slice()
      deletedCart[cartPosition].amount--
      setCart(deletedCart)

    }
  }

  // change the product amount via select
  function handleAmountChange(e, product){
    let productPosition = checkForObjectInArray(product, cart)


    // update cart product to the selected value
    let editedCart = cart.slice()
    editedCart[productPosition].amount = parseInt(e.target.value)
    console.log(e.target.value)
    setCart(editedCart)

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
        <Route path="/shoppingcart" element=
          {<ShoppingCart 
            cart={cart}
            handleRemovingItemFromCart={handleRemovingItemFromCart}
            handleAmountChange={handleAmountChange}
          />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;