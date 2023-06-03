import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./pages/Homepage/HomePage.js";
import Category from "./pages/CategoryPage/CategoryPage.js";
import ProductPage from "./pages/ProductPage/ProductPage.js";
import ShoppingCart from "./pages/ShoppingCartPage/ShoppingCartPage.js";
import { MenuContext } from "./context/MenuContext.js"
import { useToggle } from "./hooks/useToggle"
import LoginPage from "./pages/LoginPage/LoginPage.js";
/*
to do:

- style shop for desktop view
  - add hover effects
- all links on home page should lead to the product page
- useContext for cart
- look into animation library to animate changes in the prices
- fix the text alignment for delivery in shopping cart
*/


const RouteSwitch = () => {
  const [cart, setCart] = useState([])
  const {status, toggleStatus} = useToggle()

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
      if(array[i].name===object.name&&array[i].size===object.size){
        return i
      }
    }
    return false
  }
  
  return (
    <BrowserRouter>
      <MenuContext.Provider value={{status: status, toggleStatus:  toggleStatus}}>
        <Routes>
            <Route path="/" element={<Homepage
              cart={cart}
            />} />
          <Route path="/category" element={<Category
            cart={cart}
          />} />
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
          <Route path="/loginpage" element=
            {<LoginPage
              cart={cart}
            />}
          />
        </Routes>
      </MenuContext.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;