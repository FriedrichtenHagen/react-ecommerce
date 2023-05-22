import close from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/close.png"

export default function Menu({handleMenuStart, menuActive}){
  
    let menuStyle = menuActive ? "menuActive" : ""

    return(
        <div className={"menu " + menuStyle}>
            <div className="menuHeader">
                Slide in Menu
                <img src={close} onClick={handleMenuStart} id="menuIcon"></img>
            </div>
        </div>
    )
}