import './Header.css';
import logo from './assets/Logo.png';
import MenuButton from './MenuButton.js';
import { Link } from 'react-router-dom';
import SelectColor from './SelectColor';


function Header(){
    return(
        <div className='header' id='headercolor'>
            <SelectColor/>
            <MenuButton/>
            <li style={{listStyle:'none'}}>
            <Link to="/" className='logo' style={{ textDecoration: 'none'}}>
                <img src={logo} alt="SunTan"/>
            </Link>
            </li>
        </div>
    );
}
export default Header;