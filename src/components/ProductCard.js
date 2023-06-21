import {Link} from "react-router-dom";
import heart from "../images/icons/heart.png"

export default function ProductCard({product}){

    return(
            <Link to={`/Productpage/${product.name}`} className="productCard">
                <img src={product.image} className="productImage" alt={product.name} />
                <div className="productName">{product.name}</div>
                <div className="productPrice">{product.price} EUR</div>
                <FavoriteButton/>
            </Link>
    )
} 




function FavoriteButton(){

    function handleFavoriteClick(e){
        console.log(e)
    }

    return(
        <div className="favoriteButton">
            <img src={heart} onClick={handleFavoriteClick} alt="heart" id="favoriteHeartIcon"/>
        </div>
    )
}