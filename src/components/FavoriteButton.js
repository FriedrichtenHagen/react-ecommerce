import heart from "../images/icons/heart.png"
import heart_favorite from "../images/icons/heart-favorite.png"
import { useState } from "react";
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function FavoriteButton({product}){
    const { favorites, setFavorites } = useContext(FavoritesContext)
    const [productIsFavorite, setProductIsFavorite] = useState(false)

    // if(checkForObjectInArray(product, favorites)) {
    //     /* vendors contains the element we're looking for */

    // }

    // function checkForObjectInArray(object, array){
    // for(let i=0; i<array.length; i++){
    //     if(array[i].name===object.name&&array[i].size===object.size){
    //     return i
    //     }
    // }
    //     return false
    // }

    function handleFavoriteClick(e){
        console.log(product)
        // stop the redirect to product page
        e.preventDefault()  
        // add or remove the item from the favorites array
        
        // if product is in favorites

                // set state to change heart icon
                setProductIsFavorite(!productIsFavorite)
        // if product is not in favorites
        // addProductToFavorites()

    }
    function addProductToFavorites(){
        let addedFavorites = favorites.slice()
        setFavorites([...favorites, product])

    }

    return(

        <div className="favoriteButton">
            
                <img src={productIsFavorite ? heart_favorite : heart} onClickCapture={handleFavoriteClick} alt="heart" id="favoriteHeartIcon"/>
        </div>
    )
}