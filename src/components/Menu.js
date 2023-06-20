import close from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/close.png"
import { MenuContext } from "../context/MenuContext"
import { useContext } from "react"
import {Link} from "react-router-dom";
import { useAuthValue} from "../context/AuthContext"

export default function Menu(){
    const { status, toggleStatus } = useContext(MenuContext)
    let menuStyle = status ? "menuActive" : ""
    const userSignedIn = useAuthValue()




    return(
        <div className={"menu " + menuStyle}>
            <div className="menuHeader">
                <img src={close} onClick={toggleStatus} id="menuIcon" alt="close icon"></img>
            </div>
            <div className="menuBody">
                <ul>
                    <li onClick={toggleStatus}><Link to="/" className="menuLink">Home</Link></li>
                    <li onClick={toggleStatus}><Link to="/category" className="menuLink">Product Page</Link></li>
                    <li onClick={toggleStatus}><Link to="/shoppingcart" className="menuLink">Shopping Cart</Link></li>
                    <li onClick={toggleStatus}><Link to={userSignedIn ? "/client-home-page" : "/loginpage"} className="menuLink">{userSignedIn ? "My Account" : "Login"}</Link></li>
                </ul>
            </div>
        </div>
    )
}