import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"
import upwork from "../assets/upwork.png"
import { refsprovider } from '../Main/main';

const Footer = () => {
    return (
        <footer>
                <span><a href="#skills">Open Resume</a></span>
            <div>
                <ul>
                    <li><a target='_blank' href="https://www.linkedin.com/in/mhmdawad/"><img src={linkedin} alt="Linkedin profile"/></a></li>
                    <li><a target='_blank'href="https://github.com/Mawhadmd"><img src={github} alt="Github profile"/></a></li>
                    <li><a target='_blank'href="https://x.com/Mawhadmd"><img src={twitter} alt="X profile"/></a></li>
                    <li><a target='_blank' href="https://www.upwork.com/freelancers/~018ac5044285e8e175"><img src={upwork} alt="Upwork profile"/></a></li>
                   
                </ul>
            </div>
        </footer>
    );
};


Footer.propTypes = {

};


export default Footer;
