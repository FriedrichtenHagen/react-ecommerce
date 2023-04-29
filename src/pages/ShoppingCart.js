import Header from "../components/Header.js"
import Footer from '../components/Footer';
import ProductCard from "../components/ProductCard"
import ShoppingCartCard from "../components/ShoppingCartCard"



export default function ShoppingCart( {cart}) {
    const cartList = cart.map(product => {
        return(
            <ShoppingCartCard product={product} key={crypto.randomUUID()}/>
        )
    })

    return (
        <div className="ShoppingCart">
            <Header cart={cart}/>
            {cartList}
            uwaga
            <Footer/>
        </div>
    );
}


