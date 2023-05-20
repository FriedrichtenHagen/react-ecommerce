import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import data from "../data/product-feed.js"
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Footer from '../components/Footer';
import close from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/close.png"
import cloneDeep from 'lodash/cloneDeep';


export default function CategoryPage( {cart}){
    const [productFeed, setProductFeed] = useState(data)

    const location = useLocation();
    let searchMatches=null;
    let searchTerm=null;


    if(location.search !== ""){
        handleSearch()
    }
   

    function handleSearch(){

        searchTerm = location.search
        // remove the ? from the searchterm
        searchTerm = searchTerm.substring(1)
        console.log(searchTerm)
        // go through product feed and check the product names for the search term
        searchMatches = data.filter(product => product.name.includes(searchTerm))
        console.log(searchMatches)
    }


    function handleSearchClose(){
        // searchResults = null
        // setSearchResultFilter(false)
        // setProductFeed(data)
    }
 
    return(
        <div className="categoryPage">
            <Header cart={cart}/>
                <div className="categoryHeader">
                    {searchTerm ? <div className="searchTerm">
                        {searchTerm} <img src={close} id="searchTermClose" alt="" onClick={handleSearchClose} /></div> : null}
                    
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
                <ProductFeed  productFeed={searchMatches ? searchMatches : productFeed}/>
            <Footer/>
        </div>
    )
}    