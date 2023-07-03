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
import {FavoritesProvider} from "./context/FavoritesContext"
import { getAuth, onAuthStateChanged} from "firebase/auth";
import updateUserData from "./utils/updateUserData";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import { checkForObjectInArray } from "./utils/checkForObjectInArray"


const RouteSwitch = () => {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
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

    // // update the cart change to the database
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in
    //     updateUserData({cart: cart}, user.uid)
    //   } else {
    //       // User is signed out
    //     console.log("user is not signed in. Cart change cant be saved.")
    //   }
    // });

  }


// on initial render
useEffect(() => {
  // auth observer
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
      // User is signed in
      setCurrentUser(user)
      console.log("user just signed in")
  } else {
      // User is signed out
      setCurrentUser(null)
  }
  });
}, [])

// watch for changes to the cart
useEffect(() => {
    if (currentUser) {
      // User is signed in
      // update the cart change to the database 
      updateUserData({cart: cart}, currentUser.uid)
        
    } else {
        // User is signed out
      console.log("user is not signed in. Cart change cant be saved.")
    }
    // eslint-disable-next-line
},[cart])
// watch for changes to the favorites
useEffect(() => {
  // const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
    if (currentUser) {
      // User is signed in
      // update the cart change to the database 
      updateUserData({favorites: favorites}, currentUser.uid)
        
    } else {
        // User is signed out
      console.log("user is not signed in. Favorte change cant be saved.")
    }
    // eslint-disable-next-line
},[favorites])


  return (
    <BrowserRouter basename="/react-ecommerce">
      <CartProvider value={{cart: cart, setCart: setCart}}>
        <FavoritesProvider value={{favorites: favorites, setFavorites: setFavorites}}>
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
                    {currentUser ? <Navigate replace to={"/client-home-page"} /> : <LoginPage
                      cart={cart}
                    />}
                  />
                  <Route path="/client-home-page" element=
                    {
                
                      currentUser ? <ClientHomePage
                      cart={cart}/> : <Navigate replace to={"/loginpage"}
                      
                      />}
                  />
                  <Route path="/favorites" element=
                    {
                
                      <FavoritePage
                      cart={cart}/>                     
                    }
                  />
                </Routes>
              </MenuContext.Provider>
            </AuthProvider>
          </FavoritesProvider>
        </CartProvider>
    </BrowserRouter>
  );
};

export default RouteSwitch;