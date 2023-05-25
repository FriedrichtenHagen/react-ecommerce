import { useToggle } from "../hooks/useToggle"
import close from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/close.png"
import { MenuContext } from "../hooks/MenuContext"
import { useContext } from "react"


export default function Menu(){
    const { status, toggleStatus } = useContext(MenuContext)
    let menuStyle = status ? "menuActive" : ""

    return(
        <div className={"menu " + menuStyle}>
            <div className="menuHeader">
                Slide in Menu
                <img src={close} onClick={toggleStatus} id="menuIcon"></img>
            </div>
        </div>
    )
}