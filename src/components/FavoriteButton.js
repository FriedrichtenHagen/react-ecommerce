import heart from "../images/icons/heart.png"
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function FavoriteButton({product}){
    const { favorites, setFavorites } = useContext(FavoritesContext)


    function handleFavoriteClick(e){
        console.log(product)
        addProductToFavorites()
    }
    function addProductToFavorites(){
        let addedFavorites = favorites.slice()
        setFavorites([...favorites, product])

    }

    return(
        <div className="favoriteButton">
            <img src={heart} onClick={handleFavoriteClick} alt="heart" id="favoriteHeartIcon"/>
        </div>
    )
}