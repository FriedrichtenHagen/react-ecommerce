import arrow from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/arrow.png"
import backpack from "/home/friedrichtenhagen/ecommerce-site/src/images/backpack.jpg"


export default function Body(){
    return(
        <div className="body">
            <div className="block1">
                <div className="marginLeft">
                    <div className="b1Titel">
                        <h2 className="closeH2">Up to 50% off</h2>
                        <h2 className="closeH2">Spring Sale</h2>
                    </div>
                    <div className="b1Cta">
                        <div className="b1CtaText">
                            Order now
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
                            <li>Water Bottles</li>
                            <li>Accessories</li>
                            <li>Kids</li>
                            <li>Customize</li>
                            <li>Our Promise</li>
                            <li>Sale</li>
                        </ul>
                    </div>
            </div>
            <div className="block2">
                
            </div>
            <div className="block3">
                
            </div>
        </div>
    )
}