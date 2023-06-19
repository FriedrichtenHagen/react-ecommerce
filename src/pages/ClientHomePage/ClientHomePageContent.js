import { useAuthValue } from "../../context/AuthContext"
import { CartContext } from "../../context/CartContext"
import { useContext, useEffect } from "react"
import readUserData from "../../utils/readUserData.js";

export default function ClientHomePageContent( {handleSignOut}){
    const {cart, setCart} = useContext(CartContext)


    const shoppingCart = cart.map(product => {
    return(
             <p key={crypto.randomUUID()}>{product.name}</p>
         )
     })
    const currentUser = useAuthValue()
    useEffect(()=>{
        let userUid = currentUser.uid
        // read the user data from database (cart)
        readUserData(userUid)
                // change cart state to match the database cart of the user    
                .then(x => setCart(x.cart))
        
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    },[])



    return(
        <div className="clientHomePageContent">
            <h1>
                You are signed in!
                Welcome {currentUser.uid}
            </h1>
            {shoppingCart}
            <p>You created your account: {currentUser.metadata.creationTime}</p>
            <p>Your last login was: {currentUser.metadata.lastSignInTime}</p>
            <button onClick={handleSignOut} id="signout">Sign out</button>
        </div>
    )
}