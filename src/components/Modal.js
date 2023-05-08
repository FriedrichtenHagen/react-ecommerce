export default function Modal({cartModalActive, handleSizeClick, handleSizeChoice}){



    const bottleSizes = [0.25, 0.5, 1, 1.5, 2]
    const sizeList = bottleSizes.map(size => {
        return(
            <li onClick={handleSizeChoice} 
                key={crypto.randomUUID()}
                data-size={size}>
                    {size} liters
            </li>
        )
    })

    return(
        <div className="modal">
                <div className={"cartModal " + (cartModalActive ? "visible" : "hidden")}>
                <ul className='sizeList' >
                  {sizeList}
                </ul>
            </div>
            <div className={"cartModalBackground " + (cartModalActive ? "backgroundVisible" : "backgroundHidden")} onClick={handleSizeClick}>
            </div>
        </div>
    )
}