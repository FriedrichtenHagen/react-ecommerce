import Header from "../components/Header.js"
import Footer from '../components/Footer';



function ShoppingCart( {cart}) {
    const cartList = cart.map(product => {
        return(
            <ProductCard product={product} key={crypto.randomUUID()}/>
        )
    })

    return (
        <div className="ShoppingCart">
            <Header cart={cart}/>
            {cartList}
            <Footer/>
        </div>
    );
}

export default Homepage;
