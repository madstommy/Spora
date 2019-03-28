import React from 'react';
import sporaLogo from '../../images/spora_logo.jpg';
import './Navbar.css';

const Navbar =  () => {
 return (
    <div className='navFlex'>
        <img src={sporaLogo} alt='logo' />
        <button className='navButton'>About</button>
    </div>
 
    );
}

export default Navbar;