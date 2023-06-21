import Footer from "../../components/Footer"
import Header from "../../components/Header"


export default function FavoritePage({cart}){


    return(
        <div className="favoritePage">
            <Header cart={cart}/>
            <FavoritePageContent/>
            <Footer/>
        </div>
    )
}



function FavoritePageContent(){
    return(

        <div className="FavoriteContent">
            <h1>Your items</h1>
            All in one place
        </div>

    )
}