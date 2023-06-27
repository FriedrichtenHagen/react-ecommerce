import insta from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/insta.png" 
import twitter from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/twitter.png" 
import facebook from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/facebook.png" 
import pinterest from "/home/friedrichtenhagen/ecommerce-site/src/images/icons/pinterest.png" 

export default function Footer(){
    return(
        <div className="footer">
            <div className="footerTitles">
                <div id="mitgliedschaft">Cancle Plus Membership</div>
                <div id="impressum">Imprint</div>
                <div id="agb">Terms & Conditions </div>
                <div id="datenschutz">Privacy Notice</div>
                <div id="dateneinstellungen">Data Preferences</div>
            </div>
            <div className="socialIconCont">
                <div className="socialTitle">
                    Find more inspiration:
                </div>
                <div className="socialIcons">
                    <img src={insta} alt="insta" />
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                    <img src={pinterest} alt="pinterest" />
                </div>
            </div>
        </div>
    )
}