


export default function ProductFeed({productFeed}){


    const productList = productFeed.map(product => {
        return(
            <div className="product">
                <img src={require(`${product.image}`)} alt={product.name} />
            </div>
        )

    })
    
    return(
        <div className="productFeed">
            {productList}
        </div>
    )
}    