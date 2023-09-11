import '../Solarium.css';
import './Content.css';
import React, { useState } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

const PricePerMin = (price) => {
    const [myRange, setRange] = useState(10);

    return(
        <div className='priceBarContainer'>
            <input type="range" min="1" defaultValue="10" max="30" class="priceBar" id="myRange"
            onChange={(event) => setRange(event.target.value)}/>
            <p> {myRange} minuter kostar {myRange*price.Price}kr</p>
        </div>
    );
};

function Tanbeds() {
    var url = window.location.href;
    const arg =url[url.length-1];
    const product = data[arg];
    const picture = product.Picture.slice();
    if (arg>=0 && arg<4){
        

        return (

            <div className='contentcontainer'> 
                <div className='solariumDetailContainer'>
                    <div className='solariumContainerLeft'>
                        <Link to="/solarium" className='tillbaka'>
                            <li>Tillbaka</li>
                        </Link>   
                        <div className='solariumHeader'>
                            <h3>{product.Name}</h3>
                            
                        </div>
                        <div>
                            <img className='solariumPictureDetails' src={require('../assets' + picture)} alt="sunbed" />
                        </div>
                        <PricePerMin 
                            Price= {product.Price}
                        />
                    </div>
                    <div className='solariumContainerRight'>
                        <div className='solariumInfo'>
                            <h4>{product.Description}
                            </h4>
                        </div>
                    </div>
                </div>
            </div> 
        );
  }

  else{
    return (
        <div className='contentcontainer'>
            <h1>This page can not be found!</h1>
        </div>
    );
  }
};

  export default Tanbeds;