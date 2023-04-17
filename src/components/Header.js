import nalgeneLogo from "/home/friedrichtenhagen/ecommerce-site/src/images/nalgene-logo.png" 
import shoppingcart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/shopping-cart.png"
import heart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/heart.png"
import user from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/user.png"
import lang from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/internet.png"
import hamburger from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/hamburger.png"
import search from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/search.png"


export default function Header(){
const inputDefault = "Search..."


    return(
        <div className="header">
            <div className="upperHeader">
                <img src={nalgeneLogo} alt="nalgene logo" id="nalgeneLogo"/>
                <div className="headerIcons">
                    <img src={heart} className="headerIcon" alt="heart" />
                    <img src={user} className="headerIcon" alt="user" />
                    <img src={lang} className="headerIcon" alt="language select" />
                    <img src={shoppingcart} className="headerIcon" alt="cart" />
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