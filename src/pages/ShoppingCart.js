import Header from "../components/Header.js"
import Footer from '../components/Footer';
import ProductCard from "../components/ProductCard"




export default function ShoppingCart( {cart}) {
    const cartList = cart.map(product => {
        return(
            <ProductCard product={product} key={crypto.randomUUID()}/>
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


