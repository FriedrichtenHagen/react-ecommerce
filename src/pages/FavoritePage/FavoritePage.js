import Footer from "../../components/Footer"
import Header from "../../components/Header"

import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"

import ProductCard from "../../components/ProductCard"


export default function FavoritePage({cart}){


    return(
        <div className="favoritePage">
            <Header cart={cart}/>
            <FavoritePageContent/>
            <Footer/>
        </div>
    )
}



function FavoritePageContent(){
    const { favorites, setFavorites } = useContext(FavoritesContext)


    const currentFavs = favorites.map((fav)=>
        <ProductCard product={fav}/>        
    )

    return(

        <div className="favoriteContent">
            <div className="favoriteHeader">
                <h1>Your favorite items</h1>
                All in one place
            </div>
            <div className="favoriteGrid">{currentFavs}</div>
        </div>

    )
}