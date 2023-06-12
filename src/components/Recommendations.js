import ProductCard from "./ProductCard"
import data from "../data/product-feed.js"


export default function Recommendations({cart}){

    // exclude the currently added products from data feed
    const newProducts = data.map((product, index) => {
        for(let i=0; i<cart.length; i++){
            if(product.name===cart[i].name){
                return null
            }
        }
            // remove product from list of newProducts that are viable for a recommendation upsell
            // newProducts.splice(index, 1)
        return product
    })
    let filteredNewProducts = newProducts.filter(item => item!==null)
    // choose 6 products to be recommended




    const listOfRecommendations = filteredNewProducts.map(product => {
        return(
            <li key={crypto.randomUUID()}><ProductCard product={product} /></li>
        )

    })
    
    if(listOfRecommendations.length===0){
        return(
            <div className="recommendations">
            <div className="recommendationsHeader">
                <div className="headerLine1">
                Looks like you have chosen every product... What more can we recommend?
                </div>
            </div>
            <ul className="recommendationSlider">
                {listOfRecommendations}
            </ul>
        </div>
            
        )
    } else{
        return(
            <div className="recommendations">
                <div className="recommendationsHeader">
                    <div className="headerLine1">
                        We think you’ll like these
                    </div>
                    <div className="headerLine2">
                        Recommended for you
                    </div>
                </div>
                <ul className="recommendationSlider">
                    {listOfRecommendations}
                </ul>
            </div>
        )
    }
   
   

}

