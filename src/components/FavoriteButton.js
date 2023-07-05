import heart from "../images/icons/heart.png"
import heart_favorite from "../images/icons/heart-favorite2.png"
import { useState, useEffect } from "react";
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"
import { checkForObjectInArray } from "../utils/checkForObjectInArray"

export default function FavoriteButton({product}){
    const { favorites, setFavorites } = useContext(FavoritesContext)
    const [productIsFavorite, setProductIsFavorite] = useState(false)

    
    useEffect(() => {
        if(checkForObjectInArray(product, favorites)!== false) {
            /* vendors contains the element we're looking for */
            setProductIsFavorite(true)
        }else(
            setProductIsFavorite(false)
        )
      },[favorites])

    function handleFavoriteClick(e){
        // stop the redirect to product page
        e.preventDefault()  

        // see if product is in favorites array
        if(checkForObjectInArray(product, favorites)!== false) {
            // product is already in favorites
            // remove favorite status
            removeProductFromFavorites()
        }else{
            // product is not yet in favorites
            addProductToFavorites()
        }
    }
    function addProductToFavorites(){
        setFavorites([...favorites, product])
    }
    function removeProductFromFavorites(){
        const productIndex = checkForObjectInArray(product, favorites)
        let favoriteCopy = favorites.slice()
        favoriteCopy.splice(productIndex, 1)
        setFavorites(favoriteCopy)
    }

    return(

        <div className="favoriteButton">
                <img src={productIsFavorite ? heart_favorite : heart} onClickCapture={handleFavoriteClick} alt="heart" id="favoriteHeartIcon"/>
        </div>
    )
}