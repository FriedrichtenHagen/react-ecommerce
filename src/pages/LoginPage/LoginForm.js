import { useState } from "react"
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../../config/firestore"


    async function getCustomers(){
        const querySnapshot = await getDocs(collection(db, "customers"));
        querySnapshot.forEach((doc) => {
          console.dir(doc.data());
        });
    }



export default function LoginForm(){
    const [password, setPassword] = useState("")




    function handleLogFormSubmit(e){
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value)


        getCustomers()


    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    return(
        
        <form className="loginForm" action="" onSubmit={handleLogFormSubmit} >
            <label htmlFor="email">Email</label>
            <input type="text" className="standardInput" autoComplete="email" name="email" placeholder="Email address" />
            <label htmlFor="password">Password</label>
            <input type="password" className="standardInput" onChange={handlePasswordChange} name="password" placeholder="Password" value={password}/>
            <button type="submit" className="checkout">Login</button>
        </form>
    )
}

