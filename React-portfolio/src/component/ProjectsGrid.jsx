import React from 'react';
import PropTypes from 'prop-types';
import ProjectView from "./ProjectView.jsx"

const Projects = () => {
    return (
        <section className='ProjectGrid'>
            <ProjectView/>
            <ProjectView/>
     
        </section>
    );
};


Projects.propTypes = {

};


export default Projects;
