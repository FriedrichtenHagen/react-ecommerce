import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function LoginPage({cart}){


    return(
        <div className="loginPage">
            <Header cart={cart}/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}


function LoginForm(){
    return(
        <div className="loginForm">
            <form action="">
                <input type="text" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}