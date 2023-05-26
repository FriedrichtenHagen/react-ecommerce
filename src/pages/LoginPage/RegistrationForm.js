import { useState } from "react"

export default function RegistrationForm({loginActive, toggleLoginActive}){
    const [password, setPassword] = useState("")

    function handleRegFormSubmit(e){
        e.preventDefault()
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    let expandActive = "";
    if(loginActive){
        expandActive="expandActive"
    }
    
    return(
        <div className="registrationForm">
            <div className="regFormTop">
                I`m new here
                <button className="checkout" onClick={toggleLoginActive}>Register</button>
            </div>


            <div className={"regFormExpand " + expandActive}>
                <form className="registrationForm" action="" onSubmit={handleRegFormSubmit} >
                    <label htmlFor="regEmail">Email</label>
                    <input type="text" className="standardInput" autoComplete="email" name="regEmail" placeholder="Email address" />

                    <label htmlFor="regPassword">Password</label>
                    <input type="password" className="standardInput" onChange={handlePasswordChange} name="regPassword" placeholder="Password" value={password}/>
                    <button type="submit" className="checkout">Register</button>
                </form>
            </div>
        </div>
    )
}