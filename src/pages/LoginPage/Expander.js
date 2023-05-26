export default function Expander({expanderTopText, expanderButtonText, toggleLoginActive,loginActive, expandContent}){

        let expandActive = "";
        if(loginActive){
            expandActive="expandActive"
        }
        
        return(
            <div className="expander">
                <div className="expanderTop">
                    {expanderTopText}
                    <button className="checkout" onClick={toggleLoginActive}>{expanderButtonText}</button>
                </div>
    
    
                <div className={"expand " + expandActive}>
                    {expandContent}
                </div>
            </div>
        )
    
}