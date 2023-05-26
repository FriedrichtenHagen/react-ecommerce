import Footer from "../../components/Footer"
import Header from "../../components/Header"
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import { useState } from "react"

export default function LoginPage({cart}){


    return(
        <div className="loginPage">
            <Header cart={cart}/>
            <SignIn/>
            <Footer/>
        </div>
    )
}

function SignIn(){
    const [loginActive, setLoginActive] = useState(true)

    function toggleLoginActive(){
        setLoginActive(!loginActive)
        console.log(loginActive)
    }

    return(
        <div className="signIn">
            <LoginForm loginActive={loginActive} toggleLoginActive={toggleLoginActive}/>
            <RegistrationForm loginActive={loginActive} toggleLoginActive={toggleLoginActive}/>
        </div>
    )
}

