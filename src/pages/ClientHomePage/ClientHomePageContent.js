import { useAuthValue } from "../../context/AuthContext"
//import { AuthContext } from "../context/AuthContext"
//import { useContext } from "react"

export default function ClientHomePageContent( {handleSignOut}){
    //const { currentUser, setCurrentUser } = useContext(AuthContext)
    // add an icon in header that shows the user is logged in
    // block client homepage if user is not signed in
    // individualize client homepage (show user data)
    // save cart to user 
    // should the login page redirect to client home page if signed in?

    
    const currentUser = useAuthValue()
    console.log(currentUser)

    // Wednesday: make sure the user is still signed in after routing to client home page!!!

    return(
        currentUser ? 
        <>
        
        You are signed in!
        Welcome {currentUser.email}
        <button onClick={handleSignOut}>Sign out</button>
        
        </>
        :
        <>
            You are not signed in!
        </>
    )

}