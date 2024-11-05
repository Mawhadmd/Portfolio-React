import React from 'react';
import PropTypes from 'prop-types';


const Footer = () => {
    return (
        <footer>
            <div>
                <ul>
                    <li><a target='_blank' href="https://www.linkedin.com/in/mhmdawad/"><img src="/linkedin.png" alt="Linkedin profile"/></a></li>
                    <li><a target='_blank'href="https://github.com/Mawhadmd"><img src="/github.png" alt="Github profile"/></a></li>
                    <li><a target='_blank'href="https://x.com/Mawhadmd"><img src="/twitter.png" alt="X profile"/></a></li>
                    <li><a target='_blank' href="https://www.upwork.com/freelancers/~018ac5044285e8e175"><img src="/upwork.png" alt="Upwork profile"/></a></li>
                   
                </ul>
            </div>
        </footer>
    );
};


Footer.propTypes = {

};


export default Footer;
