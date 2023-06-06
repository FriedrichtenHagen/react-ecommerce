


export default function ClientHomePageContent( {handleSignOut, signedIn}){
    
    // add an icon in header that shows the user is logged in
    // block client homepage if user is not signed in
    // individualize client homepage (show user data)
    // save cart to user 
    // should the login page redirect to client home page if signed in?

    
    return(
        signedIn ? 
        <>
        
        You are signed in!
        <button onClick={handleSignOut}>Sign out</button>
        
        </>
        :
        <>
            You are not signed in!
        </>
    )

}