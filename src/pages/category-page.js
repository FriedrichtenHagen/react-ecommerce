import Header from "../components/Header";
import Footer from '../components/Footer';

export default function categoryPage(){
    return(
        <div className="categoryPage">
            <Header/>
                <div className="categoryHeader">
                    <div className="categoryHeaderTitle">Nalgene Bottles on SALE</div>
                    <ul className="categoryUl">
                        <li>Bottles</li>
                        <li>Accessories</li>
                        <li>Kids</li>
                        <li>Customize</li>
                        <li>Our Promise</li>
                        <li>Sale</li>
                    </ul>
                </div>
                <div className="productFeed">
                    
                </div>
            <Footer/>
        </div>
    )
}    