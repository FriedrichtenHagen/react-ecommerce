import { useAuthValue } from "../../context/AuthContext"
import { CartContext } from "../../context/CartContext"
import { FavoritesContext } from "../../context/FavoritesContext"
import { useContext, useEffect } from "react"
import readUserData from "../../utils/readUserData.js";
import client from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/client-home-page.png"

export default function ClientHomePageContent( {handleSignOut}){
    const {setCart} = useContext(CartContext)
    const {setFavorites} = useContext(FavoritesContext)

    const currentUser = useAuthValue()
    useEffect(()=>{
        let userUid = currentUser.uid
        // read the user data from database (cart)
        readUserData(userUid)
                // change cart state to match the database cart of the user    
                .then(x => {
                    setCart(x.cart)
                    setFavorites(x.favorites)
                })
        
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    },[currentUser])



    return(
        <div className="clientHomePageContent">
            <img src={client} alt="homepage-icon" id="client_homepage_icon"></img>
            <h1>
                Welcome {currentUser.email}!
            </h1>
            <p>This is your private corner. You can manage your orders, returns and account info right here.</p>
            <p>You created your account: {currentUser.metadata.creationTime}</p>
            <p>Your last login was: {currentUser.metadata.lastSignInTime}</p>
            <button onClick={handleSignOut} id="signout">Sign out</button>
        </div>
    )
}