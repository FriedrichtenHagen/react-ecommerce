import { useState } from "react"
import dropdown from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrowDown.png" 

export default function DropDown(){
    const [expand, setExpand] = useState(false)
 

    function handleDropDown(){
        setExpand(!expand)
    }
    let expandClassName = `drop-down-expand `+ (expand ? null : `drop-down-expand-active`)
    let expandIconActive = expand ? `expandIconActive` : null

    return(
        <div className="drop-down">
            <div className="drop-down-top">
                <div className="drop-down-base">Add a voucher (Optional)</div>
                <img src={dropdown} id="dropdownicon" className={expandIconActive} alt="drop down arrow" onClick={handleDropDown}/>
            </div>
            <div className={expandClassName}>
                <div className="enterCodeText">Enter or paste a discount code here</div>
                <input type="text" id="codeInput" />
            </div>
        </div>
    )
}