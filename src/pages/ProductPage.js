import { useState } from 'react';
import Header from "../components/Header";
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { useParams } from "react-router-dom";
import data from "../data/product-feed"
import arrowDown from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrowDown.png"
import cloneDeep from 'lodash/cloneDeep';
import Menu from '../components/Menu';


export default function ProductPage({cart, handleAddingItemToCart, handleMenuStart}){
    const [cartModalActive, setCartModalActive] = useState(false)
    const [productSize, setProductSize] = useState(1)


    // receive the product name from the router
    const { productName } = useParams();
    // find matching object in product feed
    let product = data.find(o => o.name===productName)    

    // open the size menu
    function handleSizeClick(){
        setCartModalActive(prevState => !prevState)
    }
    function handleSizeChoice(e){
        console.log(e.target.dataset.size)    
        setProductSize(parseFloat(e.target.dataset.size))
        handleSizeClick()
    }
 


    return(
        <div className="productPage">
            <Header 
                cart={cart}
                handleMenuStart={handleMenuStart}
            />
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
                    <div className="size">{productSize} liter</div>
                    <img src={arrowDown} alt="arrow" id="arrowDown" />
                </div>


                <div className="addToCart" onClick={()=>{
                    // set standard size from state
                    let newProduct = cloneDeep(product)
                    newProduct.size = productSize
                    handleAddingItemToCart(newProduct)}}>
                    Add to cart
                </div>



            </div>
            <Footer/>
           
            <Modal cartModalActive={cartModalActive}handleSizeClick={handleSizeClick}
            handleSizeChoice={handleSizeChoice}/>
            <Menu/>
        </div>
    )
}    