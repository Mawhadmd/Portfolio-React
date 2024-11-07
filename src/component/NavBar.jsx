import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const NavBar = () => {
    const storedData = JSON.parse(localStorage.getItem('githubProjects')) ?? null

    let url 
    let avatar
    console.log(storedData? 'found': 'not found')
    if(storedData && storedData.message != null){
            console.log(storedData, storedData.message)
            url = '#';
            avatar =  'src/assets/loading.png';
        }
    else{
        url = storedData && storedData.items[0].owner.html_url;
        avatar = storedData && (storedData.items[0].owner.avatar_url);
    }
    return (
        <nav> 
            <h1>
                <a href={url}><img src={avatar} alt="I" /></a>
                <p>Mohammed Awad</p>
            </h1>
            <a target='_blank' href='https://www.linkedin.com/in/mhmdawad/'>Connect</a>
        </nav>
    );
};


NavBar.propTypes = {

};


export default NavBar;
