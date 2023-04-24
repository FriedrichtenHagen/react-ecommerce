import {
    Link
  } from "react-router-dom";

export default function ProductCard({product}){

console.log(product.name)

    return(
        <div className="productCard">
            <img src={product.image} className="productImage" alt={product.name} />
            <div className="productName">{product.name}</div>
            <div className="productPrice">{product.price} EUR</div>
            <Link to={`/Productpage/${product.name}`}>
                 go to product
            </Link>
        </div>
    )
} 