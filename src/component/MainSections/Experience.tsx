import React, { useContext } from 'react';
import { useState } from 'react';
import emptying from '../../assets/empty.png'
import { refsprovider } from '../../Main/main';
interface ExperienceProps {
    
}

const Experience = () => {
    const {expref}:any = useContext(refsprovider)
    
    return (
        <section ref={expref} className='Experience'>
            <h2>Experience</h2>
            <img src={emptying}></img>
            <a href="mailto:mohammedbus13@gmail.com">Be my first client</a>
        </section>
    );
};

export default Experience;