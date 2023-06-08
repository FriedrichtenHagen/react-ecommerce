import { useState } from "react"
// import { collection, getDocs } from "firebase/firestore"; 
// import {db} from "../../config/firestore"
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";






export default function LoginForm(){
    const [password, setPassword] = useState("")
    const navigate = useNavigate()



    function handleLogFormSubmit(e){
        e.preventDefault()

        let email = e.target[0].value
        let password = e.target[1].value

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // redirect to client home page
            navigate({pathname: '/client-home-page'})
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
                


    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    return(
        
        <form className="loginForm" action="" onSubmit={handleLogFormSubmit} >
            <label htmlFor="email">Email</label>
            <input type="text" className="standardInput" autoComplete="email" id="email" placeholder="Email address" />
            <label htmlFor="password">Password</label>
            <input type="password" className="standardInput" onChange={handlePasswordChange} id="password" placeholder="Password" value={password}/>
            <button type="submit" className="checkout">Login</button>
        </form>
    )
}

