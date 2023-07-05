export function Button({text, clickHandler}){
    return(
        <button className="checkout" onClick={clickHandler}>{text}</button>
    )
}