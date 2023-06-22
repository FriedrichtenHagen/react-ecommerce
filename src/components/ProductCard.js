import {Link} from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({product}){

    return(
            <Link to={`/Productpage/${product.name}`} className="productCard">
                <img src={product.image} className="productImage" alt={product.name} />
                <div className="productName">{product.name}</div>
                <div className="productPrice">{product.price} EUR</div>
                <FavoriteButton product={product}/>
            </Link>
    )
} 




