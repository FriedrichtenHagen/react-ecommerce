import { useAuthValue } from "../../context/AuthContext"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export default function ClientHomePageContent( {handleSignOut}){
    const {cart} = useContext(CartContext)


    const shoppingCart = cart.map(product => {
    return(
             <p key={crypto.randomUUID}>{product.name}</p>
         )

     })

    
    const currentUser = useAuthValue()


    return(
        <div className="clientHomePageContent">
            <h1>
                You are signed in!
                Welcome {currentUser.email}
            </h1>
            {shoppingCart}
            <p>You created your account: {currentUser.metadata.creationTime}</p>
            <p>Your last login was: {currentUser.metadata.lastSignInTime}</p>
            <button onClick={handleSignOut} id="signout">Sign out</button>
        </div>
    )
}