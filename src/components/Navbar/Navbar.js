import React from 'react';
import sporaLogo from '../../images/spora_logo.jpg';
import './Navbar.css';

const Navbar =  ({setAboutMessage}) => {
 return (
    <div className='navFlex'>
        <img src={sporaLogo} alt='logo' />
        <button onClick={setAboutMessage} className='navButton'>About</button>
    </div>
 
    );
}

export default Navbar;