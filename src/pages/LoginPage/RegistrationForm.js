import { useState } from "react"

export default function RegistrationForm(){
    const [password, setPassword] = useState("")

    function handleRegFormSubmit(e){
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value)
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }
    return(


        <form className="registrationForm" action="" onSubmit={handleRegFormSubmit} >
            <label htmlFor="regFirstName">First Name</label>
            <input type="text" className="standardInput" name="regFirstName" placeholder="First name" />

            <label htmlFor="regLastName">Last Name</label>
            <input type="text" className="standardInput" name="regLastName" placeholder="Last name" />

            
            <label htmlFor="regEmail">Email</label>
            <input type="text" className="standardInput" autoComplete="email" name="regEmail" placeholder="Email address" />

            <label htmlFor="regPassword">Password</label>
            <input type="password" className="standardInput" onChange={handlePasswordChange} name="regPassword" placeholder="Password" value={password}/>
            <button type="submit" className="checkout">Register</button>
        </form>
    )
}