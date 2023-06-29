import arrow from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrow.png"
import backpack from "/home/friedrichtenhagen/ecommerce-site/src/images/backpack.jpg"
import colors from "/home/friedrichtenhagen/ecommerce-site/src/images/colors.webp"
import {
  Link,
} from "react-router-dom";

export default function Body(){
    return(
        <div className="body">
            <div className="block1">
                <div className="marginLeft1">
                    <div className="b1Titel">
                        <h2 className="closeH2">Up to 50% off</h2>
                        <h2 className="closeH2">Spring Sale</h2>
                    </div>
                    <div className="b1Cta">
                        <div className="b1CtaText">
                        <Link to="category" className="ctaLink">Order Now</Link>
                        </div>
                        <img src={arrow} id="ctaArrow" alt="arrow right" />
                    </div>
                    <img src={backpack} id="backpack" alt="backpack" />
                </div>
                <div className="discoverMore">
                            <Link to="/category" className="ctaLink">Discover more:</Link>
                        <ul className="discoverUl">
                            <li>
                                <Link to="category" className="ctaLink">Accessories</Link>
                            </li>
                            <li>
                            <Link to="category" className="ctaLink">Kids</Link></li>
                            <li>
                            <Link to="category" className="ctaLink">Customize</Link></li>
                            <li>
                            <Link to="category" className="ctaLink">Our Promise</Link>
                           </li>
                            <li>
                            <Link to="category" className="ctaLink">Sale</Link>
                           </li>
                        </ul>
                    </div>
            </div>
            <div className="block2">
                <div className="marginLeft2">
                    <div className="b2Titel">
                        <h2 className="closeH2">Monochrome Collection</h2>
                        <h2 className="closeH2">New Colors Are Here</h2>
                    </div>
                    <div className="b2Cta">
                    <Link to="category" className="ctaLink">Shop Now</Link>
                        <img src={arrow} id="ctaArrow" alt="arrow right" />
                    </div>
                    
                </div>
                <img src={colors} id="colors" alt="colors" />
            </div>
            <div className="block3">
                
            </div>
        </div>
    )
}