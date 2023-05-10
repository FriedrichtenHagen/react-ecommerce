import { useState } from "react"
import dropdown from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrowDown.png" 

export default function DropDown(){
    const [expand, setExpand] = useState(false)
 

    function handleDropDown(){
        setExpand(!expand)
    }

    return(
        <div className="drop-down">
            <div className="drop-down-top">
                <div className="drop-down-base">Add a voucher (Optional)</div>
                <img src={dropdown} id="dropdownicon" alt="drop down arrow" onClick={handleDropDown}/>
            </div>
            <div className="drop-down-expand">
                Surprise {expand}
            </div>
        </div>
    )
}