import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm(){
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    // add error handling to form


    function handleRegFormSubmit(e){
        e.preventDefault()
     

        const userData = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
        }


        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // redirect to client home page
            navigate({pathname: '/client-home-page'})
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
          });




        console.log(userData)
        // the database needs to be checked for a duplicate email

    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }
    return(


        <form className="registrationForm" action="" onSubmit={handleRegFormSubmit} >
            <label htmlFor="regFirstName">First Name</label>
            <input type="text" className="standardInput" id="regFirstName" placeholder="First Name" />

            <label htmlFor="regLastName">Last Name</label>
            <input type="text" className="standardInput" id="regLastName" placeholder="Last Name" />

            <label htmlFor="regEmail">Email</label>
            <input type="text" className="standardInput" autoComplete="email" id="regEmail" placeholder="Email address" />

            <label htmlFor="regPassword">Password</label>
            <input type="password" className="standardInput" onChange={handlePasswordChange} id="regPassword" placeholder="Password" value={password}/>
            <button type="submit" className="checkout">Register</button>
        </form>
    )
}