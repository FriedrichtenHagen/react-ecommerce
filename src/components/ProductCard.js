import {Link} from "react-router-dom";

export default function ProductCard({product}){

    return(
            <Link to={`/Productpage/${product.name}`} className="productCard">
                <img src={product.image} className="productImage" alt={product.name} />
                <div className="productName">{product.name}</div>
                <div className="productPrice">{product.price} EUR</div>


            </Link>
    )
} 