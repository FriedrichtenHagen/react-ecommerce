import ProductCard from "./ProductCard"



export default function ProductFeed({productFeed}){


    const productList = productFeed.map(product => {
        return(
            <ProductCard product={product} key={crypto.randomUUID()}/>
        )

    })
    
    return(
        <div className="productFeed">
            {productList}
        </div>
    )
}    