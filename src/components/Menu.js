import { useToggle } from "../hooks/useToggle"
import close from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/close.png"

export default function Menu(){
    const {status, toggleStatus} = useToggle()
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