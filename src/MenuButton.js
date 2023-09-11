import './MenuButton.css';
import './Menu';

function MenuButton(){
    return( 
        <div className='menubutton'>
            <h1 id='openNav' onClick={openNav}>☰</h1>
            <h1 id='closeNav' onClick={closeNav}>☰</h1>
        </div>

    );
    function openNav(){
        document.getElementById("menuwrapper").style.width="250px";
        document.getElementById("openNav").style.visibility="hidden";
        document.getElementById("closeNav").style.visibility="visible";
    }
    function closeNav(){
        document.getElementById("menuwrapper").style.width="0px";
        document.getElementById("openNav").style.visibility="visible";
        document.getElementById("closeNav").style.visibility="hidden";

    }
}

export default MenuButton;