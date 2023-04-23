import Header from "../components/Header";
import Footer from '../components/Footer';




export default function ProductPage({ match }){


    console.log(match)
    return(
        <div className="productPage">
            <Header/>
        
            <Footer/>
        </div>
    )
}    