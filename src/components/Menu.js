import { useToggle } from "../hooks/useToggle"
import close from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/close.png"
import { MenuContext } from "../context/MenuContext"
import { useContext } from "react"


export default function Menu(){
    const { status, toggleStatus } = useContext(MenuContext)
    let menuStyle = status ? "menuActive" : ""



    return(
        <div className={"menu " + menuStyle}>
            <div className="menuHeader">
                <img src={close} onClick={toggleStatus} id="menuIcon"></img>
            </div>
            <div className="menuBody">
                <ul>
                    <li>Home Page</li>
                    <li>Category</li>
                    <li>Shopping Cart</li>
                    <li>...</li>
                    <li>...</li>

                </ul>
            </div>
        </div>
    )
}