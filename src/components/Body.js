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
                        <div className="discoverCta">
                            Discover more:
                        </div>
                        <ul className="discoverUl">
                            <li>Accessories</li>
                            <li>Kids</li>
                            <li>Customize</li>
                            <li>Our Promise</li>
                            <li>Sale</li>
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
                        <div className="b2CtaText">
                            Shop now
                        </div>
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