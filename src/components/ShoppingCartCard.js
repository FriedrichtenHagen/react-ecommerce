export default function ShoppingCartCard( {product}) {
    // calculate quantity of items in cart array

    return (
        <div className="ShoppingCartCard">
            <img src={product.image} alt={product.name} />
            <div className="shoppingCartCardTitel">
                {product.name}
            </div>
        </div>
    );
}
