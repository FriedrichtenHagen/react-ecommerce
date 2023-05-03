import { useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import { useParams } from "react-router-dom";
import data from "../data/product-feed"
import arrowDown from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrowDown.png"


export default function ProductPage({cart, handleAddingItemToCart}){
    const [cartModalActive, setCartModalActive] = useState(false)


    // receive the product name from the router
    const { productName } = useParams();
    // find matching object in product feed
    let product = data.find(o => o.name===productName)


    

    // open the size menu
    function handleSizeClick(){
        setCartModalActive(prevState => !prevState)
    }




    return(
        <div className="productPage">
            <Header cart={cart}/>
            <div className="productBody">
                <img src={product.image} className="productPageImage" alt={product.name} />
                <div className="productInfo">
                    <div className="productTitle">
                        {product.name}
                    </div>
                    <div className="productPriceCon">
                        <div className="productPrice">
                            {product.price + " EUR"}
                        </div>
                        <div className="includesTax">
                            incl. taxes
                        </div>
                    </div>
                </div>



                <div className="pickSize" onClick={handleSizeClick}>
                    <div className="size">XL</div>
                    <img src={arrowDown} alt="arrow" id="arrowDown" />
                </div>


                <div className="addToCart" onClick={()=>{handleAddingItemToCart(product)}}>
                    Add to cart
                </div>



            </div>
            <Footer/>
            <div className={"cartModal " + (cartModalActive ? "visible" : "hidden")}>
                <ul className='sizeList' >
                    <li>XS</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
            </div>
            <div className={"cartModalBackground " + (cartModalActive ? "backgroundVisible" : "backgroundHidden")} onClick={handleSizeClick}>
            </div>
        </div>
    )
}    