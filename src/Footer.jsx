import './Footer.css';
import facelogo from './assets/facebook-logo.png';
import instalogo from './assets/instagram-logo.png';

function Footer(){
    return(
        <div className="footerwrapper" id='footercolor' >
            <div className="footerleft">
                <h4>
                    SunTan Umeå<br/>ME Solarium AB<br />Hamrinsvägen 2<br />903 33 Umeå<br />Kontakt<br />Tel: 070-569 51 50<br />Maria Wiking<br />Tel: 070-569 50 51
                </h4>
            </div>
            <div className="footerright">
                <div className="footericontext">
                    <h4>
                    Besök oss på våra sociala medier!
                    </h4>
                </div>
                <div className="footericonwrapper">
                    <img className='footericon' src={facelogo} alt="Instagram"/>
                    <img className='footericon' src={instalogo} alt="Facebook"/>
                </div>

            </div>
        </div>
    );
}
export default Footer;