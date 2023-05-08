import Header from "../components/Header.js"
import Footer from '../components/Footer';
import ShoppingCartCard from "../components/ShoppingCartCard"
import emptyCart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/empty-cart.png"
import {Link} from "react-router-dom";

export default function ShoppingCart( {cart, handleRemovingItemFromCart, handleAmountChange}) {

    // remove duplicates from cart
    // const cartWithoutDuplicates = [...new Set(cart)]
    // add the number of multiple items


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
    let subtotal=0;
    cart.forEach(product => {
        subtotal = Math.round((subtotal+product.amount*product.price) * 100) / 100
    })
    let delivery;
    if(subtotal<=90){
        delivery=4.99
    } else{
        delivery=0
    }
    let total = Math.round((subtotal+delivery) * 100) / 100

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
            <div className="total">
                <div className="shoppingCartHeader">
                    Total
                </div>
                <div className="totalBody">
                    <div className="subTotal">
                        <div className="subTotalText">Subtotal</div>
                        <div className="subTotalNumber">
                            {subtotal} €
                        </div>
                    </div>
                    <div className="delivery">
                        <div className="deliveryText">Delivery</div>
                        <div className="deliveryNumber">
                            {delivery} €
                        </div>
                    </div>
                    <div className="totalPrice">
                        <div className="totalText">Total (VAT included)</div>
                        <div className="totalNumber">
                            {total} €
                        </div>
                    </div>
                    <button className="checkout">GO TO CHECKOUT</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}


