import Header from "../components/Header.js"
import Footer from '../components/Footer';
import ShoppingCartCard from "../components/ShoppingCartCard"



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
        subtotal = subtotal+product.amount*product.price
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
            <div className="shoppingCartHeader">
                Shopping Cart ({cart.length} products)
            </div>
            <div className="shoppingCards">{cartList}</div>
            <div className="total">
                <div className="shoppingCartHeader">
                    Total
                </div>
                <div className="totalBody">
                    <div className="subTotal">
                        <div className="subTotalText">Subtotal</div>
                        <div className="subTotalNumber">
                            {subtotal}
                        </div>
                    </div>
                    <div className="delivery">
                        <div className="deliveryText">Delivery</div>
                        <div className="deliveryNumber">
                            {delivery}
                        </div>
                    </div>
                    <div className="totalPrice">
                        <div className="totalText">Total (VAT included)</div>
                        <div className="totalNumber">
                            {total}
                        </div>
                    </div>
                    <button className="checkout">GO TO CHECKOUT</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

