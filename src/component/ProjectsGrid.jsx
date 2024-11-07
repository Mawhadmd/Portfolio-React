import React, { useEffect, useState } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import ProjectView from "./ProjectView.jsx";
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({TimeExpiered}) => {
    const [githubProjects, setGithubProjects] = useState(null);
    const [lastseen, setlastseen] = useState(null);

    useEffect(()=>{
        const storedTime = localStorage.getItem('githubProjectsTime');
        var timegone = Math.floor((Date.now() - parseInt(storedTime)) / 1000 / 60 / 60)
    
        if(storedTime)
        setlastseen(timegone == 0? "A few minutes ago": timegone)
    },[githubProjects])
    
    useEffect(() => {
        console.log("timeex",TimeExpiered)
        const storedData = localStorage.getItem('githubProjects');
        if (storedData) {
            setGithubProjects(JSON.parse(storedData));
        } 
    }, [TimeExpiered]);

    return (
        <>
           <div style={{textAlign: 'center', padding: '10px'}}>Last update: {lastseen} {lastseen != null && String(lastseen).match(/^[0-9]+$/)? lastseen <= 1 == null? 'hour': 'hours': ""} </div>
        <section className='ProjectGrid'>
         
            {githubProjects && githubProjects.items
                ? githubProjects.items.map((project) => (
                    <motion.div 
                    key={project.id}
  whileInView={{ x: [-150,0], opacity: [0,1]}}
  transition={{ duration: 0.5, delay: 0.3 }}
  viewport={{ once: true }}
>
                        <ProjectView key={project.id} project={project} />
                    </motion.div>
                  ))
                : <p>Loading...</p>}
        </section>
        </>
    );
};

Projects.propTypes = {};

export default Projects;
