import React from 'react';
import Media from 'react-media';
import './Lander.css';
import nature from '../../images/nature.mp4';
import lion from '../../images/lion.jpg';



const Lander =  () => {
 return (
    <div className='videoBox' >
        <Media query= '(max-width: 499px'>
            {matches =>
                matches ? (
                    <img src={lion} alt='LION' className='lion' />
                ) : (
                <video className='bgVideo' autoPlay muted loop>
                    <source src={nature} type='video/mp4' />
                </video>)}
        </Media>
        <div className='messageBox'>
            <h1>SPORA</h1>
            <hr />
            <h2>The Only African Language Learning Community</h2>
        </div>
    </div>
 
    );
}

export default Lander;