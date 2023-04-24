import Header from "../components/Header";
import Footer from '../components/Footer';
import { Link, useParams } from "react-router-dom";



export default function ProductPage(){

    const { productName } = useParams();
    console.log(productName)
    return(
        <div className="productPage">
            <Header/>
                {productName}
            <Footer/>
        </div>
    )
}    