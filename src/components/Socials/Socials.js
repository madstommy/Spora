import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './Socials.css'

const Socials =  () => {
 return (
    <footer  >
        <div className='socialFlex' >
            <a href='https://www.instagram.com/' target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://twitter.com/' target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='mailto:someone@example.com?Subject=Hello%20again'> <FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    </footer>
 
    );
}

export default Socials;