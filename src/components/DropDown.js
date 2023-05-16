import { useState } from "react"
import dropdown from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrowDown.png" 

export default function DropDown({updateActiveDiscountCode}){
    const [expand, setExpand] = useState(false)
    const [inputDiscount, setInputDiscount] = useState("")
    const [discountCodeValid, setDiscountCodeValid] = useState("standing by")
    const discounts = [
        {code:"XMAS23", discount: 50, discountType: "percentage"},
        {code:"NEWSLETTER", discount: 10, discountType: "absolute"}
    ]

    function handleDropDown(){
        setExpand(!expand)
    }
    let expandClassName = `drop-down-expand `+ (expand ? `drop-down-expand-active` : null)
    let expandIconActive = expand ? `expandIconActive` : null


    function handleRedeemClick(e){
        e.preventDefault()
        // check if the entered code matches to one of the valid discount codes
        let correctDiscount = discounts.find(c => c.code === inputDiscount)
        if(correctDiscount){
            const discountValue = correctDiscount.discount
            const discountType = correctDiscount.discountType

            updateActiveDiscountCode({value: discountValue, type: discountType})
            setDiscountCodeValid("valid")
        } else{
            //alert("The code you entered is not correct.")
            setDiscountCodeValid("invalid")
        }
    }

    // style input according to validity of code
    let styleOfInput;
    if(discountCodeValid=== "standing by"){
        styleOfInput=""
    } else if(discountCodeValid=== "valid"){
        styleOfInput ="valid"
    } else if(discountCodeValid=== "invalid"){
        styleOfInput = "invalid"
    }

    function handleDiscountInput(enteredText){
        // if(inputDiscount.length===2){
        //     alert("Try XMAS23 for 50% off")
        // }
        setInputDiscount(enteredText)
        setDiscountCodeValid("standing by")
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
                    <input type="text" id="codeInput" className={styleOfInput} onChange={e =>{
                        handleDiscountInput(e.target.value)
                    }} />
                    <button type="" id="discountSubmit" onClick={handleRedeemClick}>Redeem</button>
                </form>
            </div>
        </div>
    )
}