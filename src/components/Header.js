import nalgeneLogo from "/home/friedrichtenhagen/ecommerce-site/src/images/logo-nalgene120x30.webp" 
import shoppingcart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/shopping-cart.png"
import heart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/heart.png"
import user from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/user.png"
import lang from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/internet.png"
import hamburger from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/hamburger.png"
import search from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/search.png"
import {Link } from "react-router-dom";

export default function Header({ cart }){
const inputDefault = "Search..."

    // display the number of items in the cart
    let cartItemNum = 0
    cart.forEach(product => {
        cartItemNum = cartItemNum + product.amount
    })
 
    return(
        <div className="header">
            <div className="upperHeader">
                <Link to="/" className="ctaLink">
                    <img src={nalgeneLogo} alt="nalgene logo" id="nalgeneLogo"/>
                </Link>
                <div className="headerIcons">
                    <img src={heart} className="headerIcon" alt="heart" />
                    <img src={user} className="headerIcon" alt="user" />
                    <img src={lang} className="headerIcon" alt="language select" />


     <Link to="/shoppingcart" className="ctaLink">
         
                        <div className="cartNumber">{cartItemNum}</div>
                        <img src={shoppingcart} className="headerIcon" alt="cart" />
         
     </Link>



                </div>
            </div>
            <div className="lowerHeader">
            
                <img src={hamburger} id="hamburger" className="headerIcon" alt="menu" />
                <div className="searchBar">
                    <input type="text" id="searchInput" defaultValue={inputDefault} />
                    <img src={search} className="headerIcon" alt="search" />
                </div>
            </div>
        </div>
    )
}