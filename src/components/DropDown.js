import { useState } from "react"
import dropdown from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrowDown.png" 

export default function DropDown({handleDiscountInput, discountCodeValid}){
    const [expand, setExpand] = useState(false)
 

    function handleDropDown(){
        setExpand(!expand)
    }
    let expandClassName = `drop-down-expand `+ (expand ? `drop-down-expand-active` : null)
    let expandIconActive = expand ? `expandIconActive` : null


    function handleRedeemClick(e){
        console.log(e)
        e.preventDefault()
    }

    return(
        <div className="drop-down">
            <div className="drop-down-top">
                <div className="drop-down-base">Add a voucher (Optional)</div>
                <img src={dropdown} id="dropdownicon" className={expandIconActive} alt="drop down arrow" onClick={handleDropDown}/>
            </div>
            <div className={expandClassName}>
                <div className="enterCodeText">Enter or paste a discount code here</div>
                <form action="/submit">
                    <input type="text" id="codeInput" className={discountCodeValid ? "valid" : "invalid"} onChange={e =>{handleDiscountInput(e.target.value)}} />
                    <button type="" id="discountSubmit" className={discountCodeValid ? "valid" : "invalid"} onClick={handleRedeemClick}>Redeem</button>
                </form>
            </div>
        </div>
    )
}