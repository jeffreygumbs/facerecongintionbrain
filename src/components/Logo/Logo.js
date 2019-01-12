import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import jeff from './jeff.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 170, width: 170 }} >
            <div className="Tilt-inner pa3">
            <img style={{paddingTop: '40px'}}src={jeff} alt="logo"/>
            </div>
            </Tilt>
        </div>
    );
}
export default Logo;