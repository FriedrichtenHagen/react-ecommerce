import Header from "../components/Header.js"
import Footer from '../components/Footer';
import ShoppingCartCard from "../components/ShoppingCartCard"
import emptyCart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/empty-cart.png"
import Recommendations from "../components/Recommendations.js"
import {Link} from "react-router-dom";
import DropDown from "../components/DropDown.js";
import { useState } from 'react';

export default function ShoppingCart( {cart, handleRemovingItemFromCart, handleAmountChange}) {
    const [activeDiscountCode, setActiveDiscountCode] = useState({value: 0, type: null})


    function updateActiveDiscountCode(code){
        setActiveDiscountCode(code)
    }


    function calculatePrices(){ 
        let discountValue = activeDiscountCode.value
        let discountType = activeDiscountCode.type

        // calculate subtotal 
        let subtotal=0;
        cart.forEach(product => {
            subtotal = Math.round((subtotal+product.amount*product.price) * 100) / 100
        })
        // add delivery cost
        let delivery;
        if(subtotal<=100){
            delivery=4.99
        } else{
            delivery=0
        }

        // calculate the total without discount
        let undiscountedTotal = subtotal+delivery
        let discountedTotal;
        // calculate discount
        if(!activeDiscountCode.value){
            // legit code does not exist
            discountedTotal = undiscountedTotal
        } else{
            // a valid code was entered
            if(discountType==="percentage"){
                discountedTotal=undiscountedTotal/100*discountValue
    
            } else if(discountType==="absolute"){
                discountedTotal=undiscountedTotal-discountValue
            }
        }
        
        // calculate actual discount
        let nominalDiscount= Math.round((discountedTotal-undiscountedTotal) * 100) / 100
        // total price
        let total = Math.round((discountedTotal) * 100) / 100

        console.log(nominalDiscount)
        // return a object containing all price information
        return {
            subtotal: subtotal,
            delivery: delivery,
            nominalDiscount: nominalDiscount,
            total: total,
        }
    }
    let prices = calculatePrices()

    const cartList = cart.map(product => {
        return(
            <ShoppingCartCard   
                product={product} 
                key={crypto.randomUUID()}
                handleRemovingItemFromCart={handleRemovingItemFromCart}
                handleAmountChange={handleAmountChange}
            />
        )
    })


    return (
        <div className="shoppingCart">
            <Header cart={cart}/>

            {(cart.length===0) ? 
                <div className="emptyCart">
                    <Link to="/category" className="emptyCartText">
                        <img src={emptyCart} alt="empty shopping cart" id="empty-cart-icon" />
                    Go. Go fill it up with all your hopes and dreams.</Link>         
                </div>
                : 
                <div className="shoppingCartHeader">
                    Shopping Cart <div className="shoppingCartAmount">({cart.length} products)</div>
                </div>
            }
            <div className="shoppingCards">{cartList}</div>
            <DropDown updateActiveDiscountCode={updateActiveDiscountCode}/>
            <div className="total">
                <div className="shoppingCartHeader">
                    Total
                </div>
                <div className="totalBody">
                    <div className="subTotal">
                        <div className="subTotalText">Subtotal</div>
                        <div className="subTotalNumber">
                            {prices.subtotal} €
                        </div>
                    </div>
                    <div className="delivery">
                        <div className="deliveryText">Delivery</div>
                        <div className="deliveryNumber">
                            {prices.delivery} €
                        </div>
                    </div>
                    <div className="delivery">
                        <div className="deliveryText">Discount</div>
                        <div className="deliveryNumber">
                            {prices.nominalDiscount} €
                        </div>
                    </div>
                    <div className="totalPrice">
                        <div className="totalText">Total (VAT included)</div>
                        <div className="totalNumber">
                            {prices.total} €
                        </div>
                    </div>
                    <button className="checkout">GO TO CHECKOUT</button>
                </div>
            </div>
            <Recommendations/>
            <Footer/>
        </div>
    );
}


