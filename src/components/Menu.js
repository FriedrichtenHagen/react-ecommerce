export default function Menu({handleMenuStart, menuActive}){
  
    let menuStyle = menuActive ? "menuActive" : null

    return(
        <div className={"menu " + menuStyle}>
            Slide in Menu
            <button onClick={handleMenuStart}>Close Menu</button>
        </div>
    )
}