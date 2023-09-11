import '../Solarium.css';
import '../pages/Content.css';
import React from 'react';
import solariumData from '../data.json'
import { Link } from 'react-router-dom';

function Solarium(){
    return(
        <>
        <div className='contentcontainer'>
            <div className='contentGrid'>
                    {getSolarium(0)}
                    {getSolarium(1)}
                    {getSolarium(2)}
                    {getSolarium(3)}
            </div>
        </div>
        </>
    );


function getSolarium (i){

        const picture = solariumData[i].Picture.slice();

        return(
            <Link to={"/solarium/baddar/" + solariumData[i].Key} className='solariumContainer' style={{ textDecoration: 'none' }}>
                <div className='solariumContainerLeft'>
                    <div className='solariumHeader'>
                        <h3>{solariumData[i].Name}</h3>
                    </div>
                    <div className='solariumInfo'>
                        <h4>{solariumData[i].Description}
                        </h4>
                    </div>
                </div>
                <div className='solariumContainerRight'>
                    <img className='solariumPicture' src={require('../assets' + picture)}  alt='Sunbed icon'/>
                    <div className='solariumPrice'>
                        <h4>{solariumData[i].Price}kr/6min</h4>
                    </div>
                </div>
            </Link>  
        );  
    
};

}
export default Solarium;