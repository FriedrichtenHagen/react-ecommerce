import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Homepage from "./pages/Homepage/HomePage.js";
import Category from "./pages/CategoryPage/CategoryPage.js";
import ProductPage from "./pages/ProductPage/ProductPage.js";
import ShoppingCart from "./pages/ShoppingCartPage/ShoppingCartPage.js";
import { MenuContext } from "./context/MenuContext.js"
import { useToggle } from "./hooks/useToggle"
import LoginPage from "./pages/LoginPage/LoginPage.js";
import ClientHomePage from "./pages/ClientHomePage/ClientHomePage.js";
import {AuthProvider} from "./context/AuthContext"
import {CartProvider} from "./context/CartContext"
import { getAuth, onAuthStateChanged} from "firebase/auth";

const RouteSwitch = () => {
  const [cart, setCart] = useState([])
  const {status, toggleStatus} = useToggle()
  const [currentUser, setCurrentUser] = useState(null)

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


useEffect(() => {
    // auth observer
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        setCurrentUser(user)
        
    } else {
        // User is signed out
        setCurrentUser(null)
    }
    });

}, [])

  
  return (
    <BrowserRouter>
      <CartProvider value={{cart: cart, setCart: setCart}}>
        <AuthProvider value={currentUser}>
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
                  {currentUser ? <Navigate replace to={"/client-home-page"} /> :
                  <LoginPage
                    cart={cart}
                  />}
                />
                <Route path="/client-home-page" element=
                  {currentUser ? <ClientHomePage
                    cart={cart}/> : <Navigate replace to={"/loginpage"}/>}
                />
              </Routes>
            </MenuContext.Provider>
          </AuthProvider>
        </CartProvider>
    </BrowserRouter>
  );
};

export default RouteSwitch;