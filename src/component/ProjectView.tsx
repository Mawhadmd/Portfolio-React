import React from 'react';
import PropTypes from 'prop-types';


const ProjectView: React.FC<{project: any}> = ({ project }) => {
    return (
        
            <div className='ProjectView'>
           <p className='projectname'>{(project.name)}</p>
           <p>{project.private? 'Is Private: Yes': "Is Private: No"}</p>
           <p>{project.description}</p>
           <a target='_blank' href={project.html_url}><button>Read More</button></a>
     
        </div>
    );
};


ProjectView.propTypes = {

};


export default ProjectView;
