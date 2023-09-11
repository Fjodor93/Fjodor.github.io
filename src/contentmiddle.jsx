import './contentmiddle.css';
import sunbed from './assets/sunbed.png';
import sunoil from './assets/sunoil.png';
import { Link } from 'react-router-dom';

function Contentmiddle(){
    return(
        <div className="contentmiddle">
            <Link to="/solarium" className="contentbox" style={{ textDecoration: 'none' }}>
                <h2 className='contenthead'>Våra Solariebäddar</h2>
                <img className='contenticon' src={sunbed} alt='Sunbed icon'/>
            </Link>
            <Link to="/produkter" className="contentbox" style={{ textDecoration: 'none' }}>
                <h2 className='contenthead'>Våra Sololjor</h2>
                <img className='contenticon' src={sunoil} alt='Sunoil icon'/>
            </Link>
        </div>
    );
}
export default Contentmiddle;