import ProductCard from "../../components/ProductCard"
import Recommendations from "../../components/Recommendations"



export default function ProductFeed({productFeed, cart}){

    if(productFeed.length>0){

    
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
    } else{
        return(
            <div className="productFeedNoResult">
                <div className="productFeedNoResultHeader">We could not find what you are looking for.</div>
                <Recommendations cart={cart}/>
            </div>
        )
    }
}    