import Footer from "../../components/Footer"
import Header from "../../components/Header"
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import { useState } from "react"
import Expander from "./Expander"
import Menu from '../../components/Menu';
export default function LoginPage({cart}){


    return(
        <div className="loginPage">
            <Header cart={cart}/>
            <SignIn/>
            <Footer/>
            <Menu/>
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
            <Expander
                expanderTopText="Welcome back"
                expanderButtonText="Login"
                toggleLoginActive={toggleLoginActive}
                loginActive={loginActive} 
                expandContent={<LoginForm/>}
                showOnActive={true}/>
            <Expander
                expanderTopText="I´m new here"
                expanderButtonText="Register"
                toggleLoginActive={toggleLoginActive}
                loginActive={loginActive}
                expandContent={<RegistrationForm/>}
                showOnActive={false} />
        </div>
    )
}

