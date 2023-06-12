import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import updateUserData from "../../utils/updateUserData";

export default function RegistrationForm(){
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {cart} = useContext(CartContext)
    // add error handling to form


    function handleRegFormSubmit(e){
        e.preventDefault()

        const userData = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            cart: cart
        }
        // create new user
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            // create a customer document with the user.id 
            updateUserData(userData, user.uid)

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
        // the database needs to be checked for a duplicate email

    }
    // add the user data and auth uid to the database
    // async function addDocumentToCollection(userData, uid){
    //   try {
    //     await setDoc(doc(db, "customers", uid), {
    //       email: userData.email,
    //       firstName: userData.firstName,
    //       lastName: userData.lastName,
    //     });
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // }





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