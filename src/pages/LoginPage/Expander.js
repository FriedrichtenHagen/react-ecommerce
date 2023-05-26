export default function Expander({
    expanderTopText, 
    expanderButtonText,
    toggleLoginActive,
    loginActive, 
    expandContent,
    showOnActive}){
        let expandActive;
        if(showOnActive){
            expandActive = "";
            if(loginActive){
                expandActive="expandActive"
            }
        } else{
            expandActive = "expandActive";
            if(loginActive){
                expandActive=""
            }
        }

        
        return(
            <div className="expander">
                <div className="expanderTop">
                    <div className="expanderTopText">{expanderTopText}</div>
                    <button className={"checkout "+ expandActive} onClick={toggleLoginActive}>{expanderButtonText}</button>
                </div>
    
    
                <div className={"expand " + expandActive}>
                    {expandContent}
                </div>
            </div>
        )
    
}