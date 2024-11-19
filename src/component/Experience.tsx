import React from 'react';
import { useState } from 'react';
import emptying from '../assets/empty.png'
interface ComponentNameProps {
    
}

const ComponentName = (props: ComponentNameProps) => {
    
    
    return (
        <section className='Experience'>
            <h2>Experience</h2>
            <img src={emptying}></img>
            <a href="#">Be my first client</a>
        </section>
    );
};

export default ComponentName;