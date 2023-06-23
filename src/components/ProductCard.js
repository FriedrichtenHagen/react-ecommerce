import {Link} from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function ProductCard({product}){
    const { favorites, setFavorites } = useContext(FavoritesContext)





    return(
            <Link to={`/Productpage/${product.name}`} className="productCard">
                <img src={product.image} className="productImage" alt={product.name} />
                <div className="productName">{product.name}</div>
                <div className="productPrice">{product.price} EUR</div>
                <FavoriteButton product={product}/>
            </Link>
    )
} 




