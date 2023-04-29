export default function ShoppingCartCard( {product}) {
    // calculate quantity of items in cart array

    return (
        <div className="shoppingCartCard">
            <img src={product.image} alt={product.name} />
            <div className="shoppingCartCardTitel">
                <div className="shoppingCartCardName">{product.name}</div>
                <div className="shoppingCartCardPrice">{product.price}</div>
            </div>
        </div>
    );
}
