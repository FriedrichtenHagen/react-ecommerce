import deleteIcon from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/delete.png"
import {Link} from "react-router-dom";
export default function ShoppingCartCard( {product, handleRemovingItemFromCart, handleAmountChange}) {

// dont forget to set a maximum in the add to cart function (10)

    return (
        <div className="shoppingCartCard">
            <Link to={`/Productpage/${product.name}`}>

                <img src={product.image} alt={product.name} className="cartProductImage"/>
            </Link>
            <div className="shoppingCartCardTitel">
                <div className="card-header">
                <Link to={`/Productpage/${product.name}`}
className="shoppingCartCardName">{product.name} </Link>
                        <img src={deleteIcon} className="deleteIcon" 
                        onClick={()=>{handleRemovingItemFromCart(product)}} 
                        alt={product.name}
                        data-product={product.name} />

           
                </div>
                <div className="card-body">
                    <div className="shoppingCartCardPrice">{Math.round((product.price*product.amount) * 100) / 100 + ` EUR`}</div>
                    <div className="shoppingCartSize">
                    {product.size} liters
                    </div>
                    <select className="shoppingCartCardAmount" onChange={(e) => handleAmountChange(e, product)}
                    defaultValue={product.amount}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
