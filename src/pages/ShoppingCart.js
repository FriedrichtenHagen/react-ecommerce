import Header from "../components/Header.js"
import Footer from '../components/Footer';
import ShoppingCartCard from "../components/ShoppingCartCard"
import emptyCart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/empty-cart.png"
import {Link} from "react-router-dom";
import DropDown from "../components/DropDown.js";
import { calculateNewValue } from "@testing-library/user-event/dist/utils/index.js";

export default function ShoppingCart( {cart, handleRemovingItemFromCart, handleAmountChange}) {
    const discounts = [
        {code:"XMAS23", discount: 50, discountType: "percentage"},
        {code:"NEWSLETTER", discount: 10, discountType: "absolute"}
    ]



    function calculatePrices(enteredDiscountCode){        
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
        if(!discounts.find(c => c.code === enteredDiscountCode)){
            // code does not exist
            discountedTotal = undiscountedTotal

        } else{
            const discountValue = discounts.find(c => c.code === enteredDiscountCode).discount
            const discountType = discounts.find(c => c.code === enteredDiscountCode).discountType
            
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
    let prices = calculatePrices("XMASfalse23")

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
                    Shopping Cart ({cart.length} products)
                </div>
            }
            <div className="shoppingCards">{cartList}</div>
            <DropDown calculatePrices={calculatePrices}/>
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

            <Footer/>
        </div>
    );
}


