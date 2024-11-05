import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const NavBar = () => {
    const storedData = JSON.parse(localStorage.getItem('githubProjects'))
    
    return (
        <nav> 
            <h1>
                <a href={storedData.items[0].owner.html_url}><img src={storedData.items[0].owner.avatar_url} alt="I" /></a>
                <p>Mohammed Awad</p>
            </h1>
            <a target='_blank' href='https://www.linkedin.com/in/mhmdawad/'>Connect</a>
        </nav>
    );
};


NavBar.propTypes = {

};


export default NavBar;
