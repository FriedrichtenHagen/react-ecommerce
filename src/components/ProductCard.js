
import butter from "/home/friedrichtenhagen/ecommerce-site/src/images/product-images/32oz-WM-Butter-Front-505x763.webp"

export default function ProductCard(product){

console.log(product.product.name)

    return(
        <div className="productCard">
            <img src={butter} className="productImage" alt={product.name} />
            <div className="ddid">{product.product.name}</div>
        </div>
    )
} 