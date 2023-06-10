import { useAuthValue } from "../../context/AuthContext"
//import { AuthContext } from "../context/AuthContext"
//import { useContext } from "react"

export default function ClientHomePageContent( {handleSignOut}){
    // style client home page
    // save cart to user 


    
    const currentUser = useAuthValue()
    console.log(currentUser)

    return(
        <div className="clientHomePageContent">
            <h1>
                You are signed in!
                Welcome {currentUser.email}
            </h1>
            <p>You created your account: {currentUser.metadata.creationTime}</p>
            <p>Your last login was: {currentUser.metadata.lastSignInTime}</p>
            <button onClick={handleSignOut} id="signout">Sign out</button>
        </div>
    )
}