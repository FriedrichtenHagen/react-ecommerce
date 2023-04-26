import { useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import { useParams } from "react-router-dom";
import data from "../data/product-feed"
import arrowDown from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrowDown.png"


export default function ProductPage(){
    const [cartModalActive, setCartModalActive] = useState(false)


    // receive the product name from the router
    const { productName } = useParams();
    // find matching object in product feed
    let product = data.find(o => o.name===productName)


    

    // open the size menu
    function handleSizeClick(){
        console.log("marla")
        setCartModalActive(prevState => !prevState)
    }

    // add item to cart
    function handleCartClick(){
        console.log(product)


        // cart needs to be in state
        // highest shared level of product page and header (display the number of cart items in the cart icon)

    }


    return(
        <div className="productPage">
            <Header/>
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


                <div className="addToCart" onClick={handleCartClick}>
                    Add to cart
                </div>



            </div>
            <Footer/>
            <div className={"cartModal " + (cartModalActive ? "visible" : "hidden")}>
                Lets party
            </div>
        </div>
    )
}    