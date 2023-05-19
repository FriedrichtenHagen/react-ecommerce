import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import data from "../data/product-feed.js"
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Footer from '../components/Footer';
import close from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/close.png"



export default function CategoryPage( {cart}){
    const [productFeed, setProductFeed] = useState(data)
    const [searchResultState, setSearchResultState] = useState(null)

    const location = useLocation();
    let searchResults=null;
    let searchText=null;
    if(location.state){
        searchResults = location.state.searchMatches
        searchText = location.state.searchTerm
        //setSearchResultState(searchResults)
    }
    // if searchterm or productfeed is empty show a message
   

    function handleSearchClose(){
        location.state.searchMatches=null;
        searchText=null;
        console.log(location.state.searchMatches)
    }
 
    return(
        <div className="categoryPage">
            <Header cart={cart}/>
                <div className="categoryHeader">
                    {searchResults ? <div className="searchTerm">
                        {searchText} <img src={close} id="searchTermClose" alt="" onClick={handleSearchClose} /></div> : null}
                    
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
                <ProductFeed  productFeed={searchResults ? searchResults : productFeed}/>
            <Footer/>
        </div>
    )
}    