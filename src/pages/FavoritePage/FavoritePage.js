import Footer from "../../components/Footer"
import Header from "../../components/Header"

import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"
import Menu from '../../components/Menu';
import ProductCard from "../../components/ProductCard"


export default function FavoritePage({cart}){


    return(
        <div className="favoritePage">
            <Header cart={cart}/>
            <FavoritePageContent/>
            <Footer/>
            <Menu/>
        </div>
    )
}



function FavoritePageContent(){
    const { favorites } = useContext(FavoritesContext)


    const currentFavs = favorites.map((fav)=>
        <ProductCard product={fav} key={crypto.randomUUID()}/>        
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