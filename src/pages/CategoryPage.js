import { useState } from 'react';
import data from "../data/product-feed.js"
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Footer from '../components/Footer';




export default function CategoryPage( {cart}){
    const [productFeed, setProductFeed] = useState(data)


    return(
        <div className="categoryPage">
            <Header cart={cart}/>
                <div className="categoryHeader">
                    <div className="categoryHeaderTitle">Nalgene Bottles on SALE</div>
                    <ul className="categoryUl">
                        <li>Bottles</li>
                        <li>Accessories</li>
                        <li>Kids</li>
                        <li>Customize</li>
                        <li>Our Promise</li>
                        <li>Sale</li>
                    </ul>
                </div>
                <ProductFeed  productFeed={productFeed}/>
            <Footer/>
        </div>
    )
}    