import { useState } from "react"

export default function LoginForm(){
    const [password, setPassword] = useState("")

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value)
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    return(
        
        <form className="loginForm" action="" onSubmit={handleFormSubmit} >
            <button className="checkout">Login</button>
            <label htmlFor="email"></label>
            <input type="text" className="standardInput" autoComplete="email" name="email" placeholder="Email address" />
            <input type="password" className="standardInput" onChange={handlePasswordChange} name="password" placeholder="Password" value={password}/>
            <button type="submit" className="checkout">Login</button>
        </form>
    )
}

