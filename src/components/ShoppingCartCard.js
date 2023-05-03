import deleteIcon from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/delete.png"

export default function ShoppingCartCard( {product, handleRemovingItemFromCart}) {

    // read the product from the clicked item
    // ...



    // calculate the price times number of products

    return (
        <div className="shoppingCartCard">
            <img src={product.image} alt={product.name} />
            <div className="shoppingCartCardTitel">
                <div className="card-header">
                    <div className="shoppingCartCardName">{product.name}</div>
                    <img src={deleteIcon} className="deleteIcon" 
                        onClick={()=>{handleRemovingItemFromCart(product)}} 
                        alt={product.name}
                        data-product={product.name} />
                </div>
                <div className="shoppingCartCardPrice">{product.price}</div>
                <div className="shoppingCartCardAmount">{product.amount}</div>
            </div>
        </div>
    );
}
