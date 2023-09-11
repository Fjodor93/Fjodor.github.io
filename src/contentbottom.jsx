import './contentbottom.css';
import './contentmiddle.css';

function Contentbottom(){
    const map = <iframe title='Hitta hit!' size="auto" id="googlemap" src="https://maps.google.com/maps?q=hamrinsv%C3%A4gen%202,%20ume%C3%A5&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" width="1080"  marginheight="0" marginwidth="0"></iframe>
    return(
        <div className="contentmiddle">
            <div className="contentbox">
                <div className="questionsheader">
                    <h2 className="questionsheadertext">
                        Vanliga frågor
                    </h2>
                </div>
                <div className="questionbox">
                    <h4 id='question'>
                        Hur öppnar jag dörren? <br />
                    </h4>
                    <h4 id='question'>
                        Kan jag betala med kort?<br />
                    </h4>
                    <h4 id='question'>
                        Är det farligt att sola?<br />
                    </h4>
                    <h4 id='question'>
                        Hur länge ska jag sola?<br />
                    </h4>
                </div>
            </div>
            <div className='contentbox'>
                <div className="googlemap">
                    {map}
                </div>
            </div>
        </div>
    );
}
export default Contentbottom;