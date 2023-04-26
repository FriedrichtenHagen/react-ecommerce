import Header from "../components/Header";
import Footer from '../components/Footer';
import { useParams } from "react-router-dom";
import data from "../data/product-feed"
import arrowDown from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrowDown.png"

export default function ProductPage(){

    // receive the product name from the router
    const { productName } = useParams();
    // find matching object in product feed
    let product = data.find(o => o.name===productName)
    console.log(product)
    // display information from product object


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
                <div className="pickSize">
                
                    <div className="size">XL</div>
                    <img src={arrowDown} alt="arrow" id="arrowDown" />
                </div>
                <div className="addToCart">
                    Add to cart
                </div>
            </div>
            <Footer/>
        </div>
    )
}    