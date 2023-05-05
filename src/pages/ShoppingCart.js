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

    return (
        <div className="shoppingCart">
            <Header cart={cart}/>
            <div className="shoppingCartHeader">
                Shopping Cart ({cart.length} products)
            </div>
            <div className="shoppingCards">{cartList}</div>
            <Footer/>
        </div>
    );
}


