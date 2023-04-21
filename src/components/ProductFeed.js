import ProductCard from "./ProductCard"



export default function ProductFeed({productFeed}){


    const productList = productFeed.map(product => {
        return(
            <ProductCard product={product}/>
        )

    })
    
    return(
        <div className="productFeed">
            {productList}
        </div>
    )
}    