import nalgeneLogo from "/home/friedrichtenhagen/ecommerce-site/src/images/logo-nalgene120x30.webp" 
import shoppingcart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/shopping-cart.png"
import heart from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/heart.png"
import user from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/user.png"
import userLoggedIn from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/user-logged-in.png"
import lang from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/internet.png"
import hamburger from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/hamburger.png"
import search from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/search.png"
import {Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { MenuContext } from "../context/MenuContext"
import { useContext } from "react"
import { useAuthValue } from "../context/AuthContext"

export default function Header({ cart }){
    const [searchTerm, setSearchState] = useState("")
    const { toggleStatus } = useContext(MenuContext)
    const navigate = useNavigate()


    // choose user icon depending on logged in status
    //  check auth status
    const currentUser = useAuthValue()
    let userIcon = null;
    if(currentUser){
        userIcon = userLoggedIn
    }else{
        userIcon = user
    }


    // display the number of items in the cart
    let cartItemNum = 0
    cart.forEach(product => {
        cartItemNum = cartItemNum + product.amount
    })

    function handleSearchInput(e){

        setSearchState(e.target.value)
    }
    function handleSearchStart(e){
        // prevent form submit
        e.preventDefault()
        
        // search result page
        navigate({pathname: '/category', search: searchTerm})
    }


    return(
        <div className="header">
            <div className="upperHeader">
                <Link to="/" className="ctaLink">
                    <img src={nalgeneLogo} alt="nalgene logo" id="nalgeneLogo"/>
                </Link>
                <div className="headerIcons">
                    <Link to="/loginpage" className="ctaLink">
                        <img src={userIcon} className="headerIcon" alt="user" />
                    </Link>
                    <Link to="/favorites" className="ctaLink">
                        <img src={heart} className="headerIcon" alt="heart" />
                    </Link>
                    {/* <img src={lang} className="headerIcon" alt="language select" /> */}
                    <Link to="/shoppingcart" className="ctaLink">
                        <div className="cartNumber">{cartItemNum}</div>
                        <img src={shoppingcart} className="headerIcon" alt="cart" />
                    </Link>
                </div>
            </div>
            <div className="lowerHeader">
                <img src={hamburger} id="hamburger" className="headerIcon" alt="menu" onClick={toggleStatus} />


                <form className="searchBar" onSubmit={handleSearchStart}>
                    <input type="text" onChange={handleSearchInput} placeholder="Search..." id="searchInput" value={searchTerm} />
                    <button type="submit" id="searchButton"><img src={search} className="headerIcon"  alt="search" /></button>
                </form>
            </div>
        </div>
    )
}